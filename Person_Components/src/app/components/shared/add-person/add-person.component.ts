import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/app/interfaces/basic-interfaces';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddPersonComponent implements OnInit {
  public GENDER;
  public DOCTYPES;
  public addForm: FormGroup;
  public selectedGender;
  public maxDate;
  public minDate;
  public fullProcess: boolean;

  constructor(private constantsService: ConstantsService, private fb: FormBuilder, private personService: PersonService) { 
    this.GENDER = constantsService.GENDER;
    this.DOCTYPES = constantsService.DOC_TYPES;
    this.fullProcess = false;
  }

  ngOnInit(): void {
    this.setDateRange();
    this.buildForm();
  }

  buildForm(){
    this.addForm = this.fb.group({
      name: new FormControl('', [
        Validators.required,
      ]),
      sureName: new FormControl('', [
        Validators.required
      ]),
      docNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[0-9]*$')
      ]),
      docType: new FormControl('', [
        Validators.required
      ]),
      gender: new FormControl(this.selectedGender, [
        Validators.required
      ]),
      birthDate: new FormControl('', [
        Validators.required
      ]),
  });
  }

  changeGenderValue(value){
    console.log(value)
    this.selectedGender = value;
  }

  setDateRange(){
    const today = new Date();
    this.maxDate = new Date(today.setFullYear(today.getFullYear() - this.constantsService.DATE_RANGE.min));
    this.minDate = new Date(today.setFullYear(today.getFullYear() - this.constantsService.DATE_RANGE.max));

  }

  createPerson(){
    const request: Person = {
      fullname: this.addForm.get('name').value + ' ' + this.addForm.get('sureName').value,
      birth: new Date(this.addForm.get('birthDate').value),
      gender: this.addForm.get('gender').value,
      doctype: this.addForm.get('docType').value,
      docnumber: this.addForm.get('docNumber').value
    }
    this.personService.createPerson(request).subscribe(res =>{
      this.fullProcess = true;
    },
    error =>{
      console.error(error);
      alert('Se ha presentado un problema durante la creación. Inténtelo nuevamente mas tarde');
    });
  }

}
