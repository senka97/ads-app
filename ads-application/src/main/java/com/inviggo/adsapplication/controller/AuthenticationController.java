package com.inviggo.adsapplication.controller;

import com.inviggo.adsapplication.dto.UserDTOCreate;
import com.inviggo.adsapplication.model.User;
import com.inviggo.adsapplication.security.AuthenticationRequest;
import com.inviggo.adsapplication.security.AuthenticationResponse;
import com.inviggo.adsapplication.security.TokenUtils;
import com.inviggo.adsapplication.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping(value = "/api/auth")
public class AuthenticationController {

    private UserService userService;
    private TokenUtils tokenUtils;
    private AuthenticationManager authenticationManager;

    private static final Logger log = LoggerFactory.getLogger(AuthenticationController.class);

    public AuthenticationController(UserService userService, TokenUtils tokenUtils, AuthenticationManager authenticationManager){
        this.userService = userService;
        this.tokenUtils = tokenUtils;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping(value = "/login")
    public ResponseEntity<AuthenticationResponse> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) {

        final Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(),
                        authenticationRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        User user = (User) authentication.getPrincipal();
        String jwt = tokenUtils.generateToken(user.getUsername());
        int expiresIn = tokenUtils.getExpiredIn();

        log.info("User with username {} logged in", user.getUsername());
        return ResponseEntity.ok(new AuthenticationResponse(jwt, expiresIn, user.getUsername()));
    }

    @PostMapping(value = "/register")
    public ResponseEntity<String> register(@Valid @RequestBody UserDTOCreate userDTO){
        User newUser = userService.create(userDTO);
        log.info("User with username {} created", newUser.getUsername());
        return ResponseEntity.ok().body("Registered successfully");
    }
}
