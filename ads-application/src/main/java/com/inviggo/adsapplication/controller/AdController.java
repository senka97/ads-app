package com.inviggo.adsapplication.controller;

import com.inviggo.adsapplication.dto.AdDTOCreateUpdate;
import com.inviggo.adsapplication.dto.AdDTOShow;
import com.inviggo.adsapplication.mapper.AdMapper;
import com.inviggo.adsapplication.model.Ad;
import com.inviggo.adsapplication.service.AdService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/ads")
public class AdController {

    private AdService service;
    private AdMapper mapper;

    private static final Logger log = LoggerFactory.getLogger(AdController.class);

    public AdController(AdService service, AdMapper mapper){
        this.service = service;
        this.mapper = mapper;
    }

    @GetMapping
    public ResponseEntity<List<AdDTOShow>> getAll(@RequestParam Integer pageNumber){
        Page<Ad> found = service.getAll(pageNumber);
        return ResponseEntity.ok().body(found
                .stream()
                .map(mapper::toDTO)
                .collect(Collectors.toList()));
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<AdDTOShow> get(@PathVariable Long id) {
        Ad found = service.get(id);
        return ResponseEntity.ok().body(mapper.toDTO(found));
    }

    @PostMapping
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<AdDTOShow> create(@Valid @RequestBody AdDTOCreateUpdate adDTO){
        Ad created = service.create(adDTO);
        log.info("Ad with id {} created", created.getId());
        return ResponseEntity.ok().body(mapper.toDTO(created));
    }

    @PutMapping(value = "/{id}")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<AdDTOShow> update(@PathVariable Long id,
                                           @Valid @RequestBody AdDTOCreateUpdate adDTO) {
        Ad updated = service.update(id, adDTO);
        log.info("Ad with id {} updated", id);
        return ResponseEntity.ok().body(mapper.toDTO(updated));
    }

    @DeleteMapping(value="/{id}")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        log.info("Ad with id {} deleted", id);
        return ResponseEntity.ok().build();
    }

    @PostMapping(value = "/upload-image")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<String> uploadImage(@RequestParam MultipartFile file) {
        return ResponseEntity.ok().body(service.uploadImage(file));
    }
}
