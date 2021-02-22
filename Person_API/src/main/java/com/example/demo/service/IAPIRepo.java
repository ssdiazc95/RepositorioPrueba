package com.example.demo.service;

import org.springframework.data.repository.Repository;

import com.example.demo.DataBaseOpt.Person;

import java.util.List;

public interface IAPIRepo extends Repository<Person , Integer > {
	
	List<Person> findAll();
	Person save(Person person);
	Person findById(int id_persona);
}
