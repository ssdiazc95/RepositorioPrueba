package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.DataBaseOpt.Person;
import com.example.demo.service.IAPIRepo;


public class APIServiceImp implements IAPIService{
	
	@Autowired
	IAPIRepo person;
	
	@Override
	public List<Person> getPerons() {
		return person.findAll();
	}
	
	@Override
	public Person addNewPerson(Person p) {
		return person.save(p);
	}
	
	@Override 
	public Person getSinglePerson(int id_persona) {
		return person.findById(id_persona);
	}
//	

}
