package com.inviggo.adsapplication.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Config implements WebMvcConfigurer {

    @Value("${image.path}")
    private String IMAGE_PATH;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
                .addResourceHandler("/content/**")
                .addResourceLocations(
                        "file:///" + IMAGE_PATH.replace('\\', '/') + "/"
                );
    }
}
