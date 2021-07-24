package com.inviggo.adsapplication.service;

import com.inviggo.adsapplication.dto.UserDTOCreate;
import com.inviggo.adsapplication.mapper.UserMapper;
import com.inviggo.adsapplication.model.User;
import com.inviggo.adsapplication.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.time.LocalDate;

@Service
public class UserService {

    private UserRepository repository;
    private UserMapper mapper;
    private RoleService roleService;

    public UserService(UserRepository repository, UserMapper mapper, RoleService roleService){
        this.mapper = mapper;
        this.repository = repository;
        this.roleService = roleService;
    }

    @Transactional
    public User create(UserDTOCreate userDTO) {
        User newUser = mapper.toEntity(new User(), userDTO);
        newUser.setRegistrationDate(LocalDate.now());
        newUser.getRoles().add(roleService.findByName("ROLE_USER"));
        return repository.save(newUser);
    }

    public User getCurrentUser(){
        Authentication currentUser = SecurityContextHolder.getContext().getAuthentication();
        String username = currentUser.getName();
        return findByUsername(username);
    }

    public User findById(Long id){
        return repository.findById(id).orElseThrow(() ->
                new EntityNotFoundException(String.format("User with id %d not found", id)));
    }

    public User findByUsername(String username){
        return repository.findByUsername(username);
    }
}
