package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.DataBaseOpt.Person;
import com.example.demo.service.APIServiceImp;

@RestController
@RequestMapping({"/services"})
@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
public class APIController {
	
	
	@Autowired
	APIServiceImp person;
	
	// Get All Persons
    // URL: http://localhost:8080/services/list
    @GetMapping("/list")
    public List<Person> getPerons() {
        return person.getPerons();
    }
    
    // Get All Persons
    // URL: http://localhost:8080/services/add
    @GetMapping("/add")
    public Person addPerons(@RequestBody Person p) {
        return person.addNewPerson(p);
    }
    
    // Get a User by id
    // URL: http://localhost:8080/services/persons/#
    @GetMapping("/persons/{id}")
    public Person getNoteById(@PathVariable(value = "id") int id) {
        return person.getSinglePerson(id);
    }
}
