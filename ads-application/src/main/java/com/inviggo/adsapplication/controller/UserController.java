package com.inviggo.adsapplication.controller;

import com.inviggo.adsapplication.service.UserService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/users")
public class UserController {

    private UserService service;

    public UserController(UserService service){
        this.service = service;
    }
}
