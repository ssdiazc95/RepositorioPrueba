import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adopt, Person } from '../interfaces/basic-interfaces';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private constantsService: ConstantsService,  private http: HttpClient) { }

  getListPerson(){
    return this.http.get<Person[]>(this.constantsService.getListUrl());
  }
  getListAdopt(){
    return this.http.get<Adopt[]>(this.constantsService.getAdoptUrl());
  }

  createPerson(request: Person){
    return this.http.post<any>(this.constantsService.getAddUrl(), request);
  }

  adoptPerson(request: Adopt){
    return this.http.post<any>(this.constantsService.getAddUrl(), request);
  }

  consultSinglePerson(){
    return this.http.get<Person>(this.constantsService.getConsultUrl());
  }
}
