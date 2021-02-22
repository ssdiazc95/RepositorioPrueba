package com.example.demo.service;

import java.util.List;

import com.example.demo.DataBaseOpt.Person;

public interface IAPIService {
	List<Person> getPerons();
	Person addNewPerson(Person person);
	Person getSinglePerson(int documentNumber);
	
}
