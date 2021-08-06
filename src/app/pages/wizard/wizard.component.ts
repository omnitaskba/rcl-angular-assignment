import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface EducationType {
  name: string,
  longTitle: string
}

interface User {
  name: string,
  surname: string,
  address: string,
  phoneNumber: string,
  education: string,
  educationType: EducationType
}

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  educationTypes: EducationType[] = [{
    name: 'BA', longTitle: ' Bachelor of Arts'
  },{
    name: 'BSc', longTitle: ' Bachelor of Science'
  },{
    name: 'LLB', longTitle: ' Bachelor of Laws'
  },{
    name: 'BCL', longTitle: ' Bachelor of Civil Law'
  },{
    name: 'BEng', longTitle: ' Bachelor of Engineering'
  },{
    name: 'BEd', longTitle: ' Bachelor of Education'
  },{
    name: 'MBBS', longTitle: ' Bachelor of Medicine'
  },{
    name: 'BDS', longTitle: ' Bachelor of Dental Surgery'
  }]

  selectedEducation: EducationType | undefined;

  currentStep = 1;
  formPersonal: FormGroup;
  formEducation: FormGroup;
  newUser: User | undefined;

  get fcPersonal(): any {
    return this.formPersonal.controls;
  }

  get fcEducation(): any {
    return this.formEducation.controls;
  }

  constructor(private formBuilder: FormBuilder) {
    this.currentStep = 1;

    this.formPersonal = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      surname:  new FormControl('', [Validators.required]),
      address:  new FormControl('', [Validators.required]),
      phoneNumber:  new FormControl('', [Validators.pattern('^[0-9]*$')])
    });

    this.formEducation = this.formBuilder.group({
      education: new FormControl(''),
    });

    this.fcEducation.education.valueChanges.subscribe((selectedValue:any) => {
      this.selectedEducation = this.educationTypes.find(el => el.name == selectedValue);
    })
  }

  ngOnInit(): void {
  }

  onContinuePersonalClicked(): void  {
    if(this.formPersonal.valid) {
      this.currentStep++;;
    }
  }


  onContinueEducationClicked() {
    this.currentStep++;;
    this.newUser = Object.assign({}, this.formPersonal.value, this.formEducation.value, {educationType: this.selectedEducation})    
  }
  
 

  onBackClicked() {
    this.currentStep--;
  }

}
