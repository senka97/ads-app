package com.inviggo.adsapplication.repository;

import com.inviggo.adsapplication.model.Ad;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdRepository extends JpaRepository<Ad, Long> {
}
