import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'
import { AppService } from '../app.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html'
})

export class Users implements OnInit, OnDestroy {

  constructor(private appService: AppService) { }

  userinfo = [];
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.appService.subject.subscribe(data => {
      this.userinfo.push(data);
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
