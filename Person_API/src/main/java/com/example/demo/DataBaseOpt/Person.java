package com.example.demo.DataBaseOpt;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="persontwo")
public class Person {
	
	@Column
	private String fullname;
	
	@Column
	private Date birth;
	
	@Column
	private String gender;
	
	@Column
	private String doctype;
	
	@Id
	@Column
	private int docnumber;
	

}
