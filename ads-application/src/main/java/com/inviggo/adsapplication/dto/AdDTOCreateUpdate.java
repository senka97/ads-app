package com.inviggo.adsapplication.dto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

public class AdDTOCreateUpdate {

    @NotBlank(message = "Ad name can't be blank")
    private String name;

    private String description;

    private String imageUrl;

    @NotNull(message = "Price is mandatory")
    @Positive(message = "Price must be positive number")
    private Double price;

    @NotBlank(message = "Category name can't be blank")
    private String category;

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public Double getPrice() {
        return price;
    }

    public String getCategory() {
        return category;
    }

}
