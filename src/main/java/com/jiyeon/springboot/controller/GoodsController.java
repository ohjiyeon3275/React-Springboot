package com.jiyeon.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jiyeon.springboot.exception.ResourceNotFoundException;
import com.jiyeon.springboot.model.Goods;
import com.jiyeon.springboot.repository.GoodsRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class GoodsController {
	
	@Autowired
	private GoodsRepository goodsrepository;
	
	//list
	@GetMapping("/goods")
	public List<Goods> getAllGoods(){
		return goodsrepository.findAll();
	}
	
	//create
	@PostMapping("/goods")
	public Goods createGoods(@RequestBody Goods goods) {
		return goodsrepository.save(goods);
	}
	
	//get by id rest api
	@GetMapping("/goods/{id}")
	public ResponseEntity<Goods> getGoodsById(@PathVariable Long id) {
		Goods goods = goodsrepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("goods not exist id : "+id));
		return ResponseEntity.ok(goods);	
	}
	
	//update
	@PutMapping("/update-goods/{id}")
	public ResponseEntity<Goods> updateGoods(@PathVariable Long id, @RequestBody Goods goodsDetails){
		
		Goods goods = goodsrepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("goods not exist id : "+id));
		goods.setName(goodsDetails.getName());
		goods.setCompany(goodsDetails.getCompany());
		goods.setPrice(goodsDetails.getPrice());
		
		Goods updatedGoods = goodsrepository.save(goods);
		return ResponseEntity.ok(updatedGoods);
	}
	
	//delete
	@DeleteMapping("/delete-goods/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteGoods(@PathVariable Long id){
		Goods goods = goodsrepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("goods not exist id : "+id));
		
		goodsrepository.delete(goods);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	
	}

}
