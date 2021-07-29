package com.inviggo.adsapplication.dto;


import java.time.LocalDate;

public class AdDTOShow {

    private Long id;

    private String name;

    private String description;

    private String imageUrl;

    private Double price;

    private LocalDate creationDate;

    private String category;

    private UserDTOShow user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public UserDTOShow getUser() {
        return user;
    }

    public void setUser(UserDTOShow user) {
        this.user = user;
    }
}
