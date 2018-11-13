import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AppService } from '../../app.service';

@Component({
  selector: 'add-user',
  templateUrl: './adduser.component.html'
})

export class AddUser {
  @ViewChild('f') userForm: NgForm;

  constructor(private appService: AppService) { }

  onSubmit() {
    this.appService.subject.next(this.userForm.value);
  }

}
