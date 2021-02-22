import { Component, OnInit } from '@angular/core';
import { Adopt, Person, TablePerson } from 'src/app/interfaces/basic-interfaces';
import { ConstantsService } from 'src/app/services/constants.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css', '../add-person/add-person.component.css']
})
export class ListPersonComponent implements OnInit {
  displayedColumns;
  dataSource: Person[];
  persons: Person[];
  adopt: Adopt[];

  constructor(private constantsService: ConstantsService, private personService: PersonService) {
    this.dataSource = this.constantsService.MOCKTABLE;
    this.displayedColumns = this.constantsService.COLUMNS_NAMES;
   }

  ngOnInit(): void {
    // Aun no se mapea la estructura real
    this.getListPerson();
  }

  getListPerson(){
    this.personService.getListPerson().subscribe(res =>{
      this.persons = res;
    },
    error =>{
      console.error(error);
      alert('Se ha presentado un problema durante la consulta. Inténtelo nuevamente mas tarde');
    });
  }

}
