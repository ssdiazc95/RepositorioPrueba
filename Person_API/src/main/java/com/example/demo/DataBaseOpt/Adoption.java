package com.example.demo.DataBaseOpt;


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
@Table(name="adoption")
public class Adoption {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id_adoption;
	
	@Column
	private int id_persona;
	
	@Column
	private int docnumber_father;
	
	@Column
	private int docnumber_mother;

}
