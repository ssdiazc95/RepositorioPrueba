import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Adopt } from 'src/app/interfaces/basic-interfaces';
import { ConstantsService } from 'src/app/services/constants.service';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-adopt-person',
  templateUrl: './adopt-person.component.html',
  styleUrls: ['./adopt-person.component.css', '../add-person/add-person.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdoptPersonComponent implements OnInit {

  public GENDER;
  public DOCTYPES;
  public adoptForm: FormGroup;
  public fullProcess: boolean;

  constructor(private constantsService: ConstantsService, private fb: FormBuilder, private personService: PersonService ) {
    this.GENDER = constantsService.GENDER;
    this.DOCTYPES = constantsService.DOC_TYPES;
    this.fullProcess = false;
   }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.adoptForm = this.fb.group({
      docNumberMother: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[0-9]*$')
      ]),
      docTypeMother: new FormControl('', [
        Validators.required
      ]),
      docNumberFather: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[0-9]*$')
      ]),
      docTypeFather: new FormControl('', [
        Validators.required
      ]),
      docNumberPerson: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[0-9]*$')
      ]),
      docTypePerson: new FormControl('', [
        Validators.required
      ]),
  });
  }

  AdoptPerson(){
    const request: Adopt = {
      idpersona: this.adoptForm.get('docNumberPerson').value,
      docnumberfather: this.adoptForm.get('docNumberFather').value,
      docnumbermother: this.adoptForm.get('docNumberMother').value,
    }
    this.personService.adoptPerson(request).subscribe(res =>{
      this.fullProcess = true;
    },
    error =>{
      console.error(error);
      alert('Se ha presentado un problema durante la adopción. Inténtelo nuevamente mas tarde');
    });
  }

}
