package com.inviggo.adsapplication.service;

import com.inviggo.adsapplication.dto.AdDTOCreateUpdate;
import com.inviggo.adsapplication.mapper.AdMapper;
import com.inviggo.adsapplication.model.Ad;
import com.inviggo.adsapplication.repository.AdRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityNotFoundException;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.Objects;

import static java.nio.file.StandardOpenOption.CREATE_NEW;

@Service
public class AdService {

    private AdRepository repository;
    private AdMapper mapper;
    private UserService userService;

    @Value("${image.path}")
    private String IMAGE_PATH;

    private static final Logger log = LoggerFactory.getLogger(AdService.class);

    public AdService(AdRepository repository, AdMapper mapper, UserService userService){
        this.repository = repository;
        this.mapper = mapper;
        this.userService = userService;
    }

    @Transactional(readOnly = true)
    public Page<Ad> getAll(Integer pageNumber){
        return repository.findAll(PageRequest.of(pageNumber, 20,  Sort.by(Sort.Direction.DESC, "creationDate")));
    }

    @Transactional(readOnly = true)
    public Ad get(Long id){
        return findById(id);
    }

    @Transactional
    public Ad create(AdDTOCreateUpdate adDTO){
        Ad newAd = mapper.toEntity(new Ad(), adDTO);
        newAd.setUser(userService.getCurrentUser());
        newAd.setCreationDate(LocalDate.now());
        return repository.save(newAd);
    }

    @Transactional
    public Ad update(Long id, AdDTOCreateUpdate adDTO){
        Ad book = mapper.toEntity(findById(id), adDTO);
        return repository.save(book);
    }

    @Transactional
    public void delete(Long id){
        repository.deleteById(id);
    }

    private Ad findById(Long id) {
        return repository.findById(id).orElseThrow(() ->
                new EntityNotFoundException(String.format("Ad with id %d not found",id)));
    }

    public String uploadImage(MultipartFile file) {
        Objects.requireNonNull(file);
        Path storageDirectory = Paths.get(IMAGE_PATH);
        createDirectoryIfNotExists(storageDirectory);
        String extension = getExtension(file);
        String imageName = System.currentTimeMillis() + "." + extension;
        try (OutputStream os = Files.newOutputStream(Paths.get(IMAGE_PATH, imageName), CREATE_NEW)) {
            os.write(file.getBytes());
        } catch (IOException e) {
            log.error("Error uploading image ", e);
        }
        return imageName;
    }

    private void createDirectoryIfNotExists(Path storageDirectory) {
        if (!Files.exists(storageDirectory)) {
            try {
                Files.createDirectories(storageDirectory);
            }catch (Exception e){
                e.printStackTrace();
            }
        }
    }

    private String getExtension(MultipartFile file) {
        String fileName = file.getOriginalFilename();
        String extension = null;
        if (fileName != null) {
            extension = fileName
                    .substring(fileName.lastIndexOf(".") + 1)
                    .toLowerCase();
        }
        return extension;
    }
}
