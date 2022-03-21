package com.jiyeon.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jiyeon.springboot.model.Goods;

@Repository
public interface GoodsRepository extends JpaRepository<Goods, Long>{

}
