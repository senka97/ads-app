package com.inviggo.adsapplication.service;

import com.inviggo.adsapplication.model.Role;
import com.inviggo.adsapplication.repository.RoleRepository;
import org.springframework.stereotype.Service;

@Service
public class RoleService {

    private final RoleRepository repository;

    public RoleService(RoleRepository roleRepository){
        this.repository = roleRepository;
    }

    public Role findByName(String name) {
        return repository.findByName(name);
    }
}
