package com.inviggo.adsapplication.specification;

import com.inviggo.adsapplication.enums.Category;
import com.inviggo.adsapplication.model.Ad;
import com.inviggo.adsapplication.model.User;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class AdSpecification implements Specification<Ad> {

    private Map<String, String> queryParams;
    private User currentUser;

    public AdSpecification(Map<String, String> queryParams, User currentUser) {
        this.queryParams = queryParams;
        this.currentUser = currentUser;
    }

    @Override
    public Predicate toPredicate(Root<Ad> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {

        List<Predicate> predicates = new ArrayList<>();

        if (queryParams.containsKey("showMineOnly")) {
            String mineOnly = queryParams.get("showMineOnly");
            if(mineOnly != null && mineOnly.equals("true")) {
                predicates.add(criteriaBuilder.equal(root.get("user"), currentUser));
            }
        }

        if (queryParams.containsKey("name")) {
            String name = queryParams.get("name");
            predicates.add(criteriaBuilder
                    .like(criteriaBuilder.lower(root.get("name")), "%" + name.toLowerCase() + "%"));
        }

        if (queryParams.containsKey("category")) {
            if(!queryParams.get("category").equals("")){
                Category category = Category.valueOf(queryParams.get("category"));
                predicates.add(criteriaBuilder.equal(root.get("category"), category));
            }
        }

        return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
    }
}
