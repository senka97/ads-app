package com.inviggo.adsapplication.mapper;

import com.inviggo.adsapplication.dto.UserDTOCreate;
import com.inviggo.adsapplication.dto.UserDTOShow;
import com.inviggo.adsapplication.model.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;


@Component
public class UserMapper {

    public final PasswordEncoder passwordEncoder;

    public UserMapper(PasswordEncoder passwordEncoder){
        this.passwordEncoder = passwordEncoder;
    }

    public UserDTOShow toDTO(User user){

        UserDTOShow userDTO = new UserDTOShow();

        userDTO.setId(user.getId());
        userDTO.setUsername(user.getUsername());
        userDTO.setPhoneNumber(user.getPhoneNumber());
        userDTO.setRegistrationDate(user.getRegistrationDate());

        return userDTO;
    }

    public User toEntity(User user, UserDTOCreate userDTO){

        user.setUsername(userDTO.getUsername());
        user.setPhoneNumber(userDTO.getPhoneNumber());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));

        return  user;
    }
}
