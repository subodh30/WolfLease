import { Component, Inject, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CreateOwner} from '../models/CreateOwner';


export interface DialogData {
  title: string;
  content: string;
}

@Component({
  selector: 'app-creater-owner',
  templateUrl: './creater-owner.component.html',
  styleUrls: ['./creater-owner.component.scss']
})

export class CreaterOwnerComponent implements OnInit {

  createOwnerForm : FormGroup;
  loading: boolean = false;
  createFormData : Object = {};
  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router) {
    this.createOwnerForm = this.fb.group({
      contact_number: ['', [Validators.required]],
      contact_email: ['', [Validators.required]],
      password: ['', [Validators.required]],
   });
   }

  ngOnInit(): void {
  }

  // submit function to call actual API and get short URL
  createNewOwner(){
    // only call API if form is valid
    if(this.createOwnerForm.valid)
    {
      this.createOwnerForm.markAllAsTouched();
      this.loading = true;
      let owner = new CreateOwner({
        "contact_number": this.createOwnerForm.get('contact_number')?.value,
        "contact_email" : this.createOwnerForm.get('contact_email')?.value,
        "password" : this.createOwnerForm.get('password')?.value
      });
    }
  }

  

}

export class DialogShortUrlComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  content: string = this.data.content
  title: string = this.data.title
}
