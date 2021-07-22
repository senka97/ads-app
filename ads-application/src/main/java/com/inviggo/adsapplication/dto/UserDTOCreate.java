package com.inviggo.adsapplication.dto;

import javax.validation.constraints.NotBlank;

public class UserDTOCreate {

    @NotBlank(message = "Username can't be blank")
    private String username;

    @NotBlank(message = "Password can't be blank")
    private String password;

    @NotBlank(message = "Phone number can't be blank")
    private String phoneNumber;

    public UserDTOCreate() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
