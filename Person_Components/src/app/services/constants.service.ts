import { Injectable } from '@angular/core';
import { Person, TablePerson } from '../interfaces/basic-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }

  // Urls
  public BASE_URL = 'http://localhost:8080/services';
  public PATH_LIST = '/list'; 
  public PATH_ADD = '/add'; 
  public PATH_CONSULT = '/persons/'; 
  public PATH_ADOPT = '/adopt'; 

  public OPTIONS_MENU = [
    {
      label: 'Inicio',
      route: '/home'
    },
    {
      label: 'Agregar persona',
      route: '/add-person'
    },
    {
      label: 'Lista de personas',
      route: '/list-person'
    },
    {
      label: 'Adopción personas',
      route: '/adopt-person'
    }
  ];

  public GENDER = [
    {
      tipe: 'MASCULINO',
      value: 'M'
    },
    {
      tipe: 'FEMENINO',
      value: 'F'
    }
  ];

  public DOC_TYPES = [
    {
      tipe: 'Cédula de ciudadanía',
      value: 'CC'
    },
    {
      tipe: 'Cédula de extranjero',
      value: 'CE'
    },
    {
      tipe: 'Pasaporte',
      value: 'PP'
    },
    {
      tipe: 'Tarjeta de identidad',
      value: 'TI'
    }
  ];

  public DATE_RANGE = {
    min: 0,
    max: 100
  };

  public COLUMNS_NAMES = [
    'Número de documento',
    'Tipo de documento',
    'Nombre',
    'Género',
    'Fecha de nacimiento',
  ]

  public MOCKTABLE: Person[] = [
    {docnumber: 11111, doctype: 'CC', fullname: 'Pepito Alejandro', gender: 'M', birth: new Date()},
    {docnumber: 11111, doctype: 'CC', fullname: 'Pepito Alejandro', gender: 'M', birth: new Date()},
    {docnumber: 11111, doctype: 'CC', fullname: 'Pepito Alejandro', gender: 'M', birth: new Date()},
    {docnumber: 11111, doctype: 'CC', fullname: 'Pepito Alejandro', gender: 'M', birth: new Date()},
    {docnumber: 11111, doctype: 'CC', fullname: 'Pepito Alejandro', gender: 'M', birth: new Date()},
    {docnumber: 11111, doctype: 'CC', fullname: 'Pepito Alejandro', gender: 'M', birth: new Date()},
    {docnumber: 11111, doctype: 'CC', fullname: 'Pepito Alejandro', gender: 'M', birth: new Date()},
    {docnumber: 11111, doctype: 'CC', fullname: 'Pepito Alejandro', gender: 'M', birth: new Date()},
    {docnumber: 11111, doctype: 'CC', fullname: 'Pepito Alejandro', gender: 'M', birth: new Date()},
    {docnumber: 11111, doctype: 'CC', fullname: 'Pepito Alejandro', gender: 'M', birth: new Date()},
    {docnumber: 11111, doctype: 'CC', fullname: 'Pepito Alejandro', gender: 'M', birth: new Date()},
    {docnumber: 11111, doctype: 'CC', fullname: 'Pepito Alejandro', gender: 'M', birth: new Date()},
  ];


  public getListUrl(){
    return this.BASE_URL + this.PATH_LIST;
  }
  public getAddUrl(){
    return this.BASE_URL + this.PATH_ADD;
  }
  public getConsultUrl(){
    return this.BASE_URL + this.PATH_CONSULT;
  }
  public getAdoptUrl(){
    return this.BASE_URL + this.PATH_ADOPT;
  }
}
