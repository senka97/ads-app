package com.inviggo.adsapplication.mapper;

import com.inviggo.adsapplication.dto.AdDTOCreateUpdate;
import com.inviggo.adsapplication.dto.AdDTOShow;
import com.inviggo.adsapplication.enums.Category;
import com.inviggo.adsapplication.model.Ad;
import org.springframework.stereotype.Component;


@Component
public class AdMapper {

    public AdDTOShow toDTO(Ad ad){

        AdDTOShow adDTO = new AdDTOShow();

        adDTO.setId(ad.getId());
        adDTO.setName(ad.getName());
        adDTO.setDescription(ad.getDescription());
        adDTO.setImageUrl(ad.getImageUrl());
        adDTO.setPrice(ad.getPrice());
        adDTO.setCategory(ad.getCategory().toString());
        adDTO.setCreationDate(ad.getCreationDate());

        return adDTO;
    }

    public Ad toEntity(Ad ad, AdDTOCreateUpdate adDTO){

        ad.setName(adDTO.getName());
        ad.setDescription(adDTO.getDescription());
        ad.setImageUrl(adDTO.getImageUrl());
        ad.setPrice(adDTO.getPrice());
        ad.setCategory(getCategory(adDTO.getCategory()));

        return ad;
    }

    private Category getCategory(String text){
        for (Category c : Category.values()) {
            if (c.name().equalsIgnoreCase(text)) {
                return c;
            }
        }
        return Category.other;
    }

}
