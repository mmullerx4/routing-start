import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs'; //'rxjs/Subscription'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

//store subscription
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSuscription: Subscription;

  //inject & get access to the currently loaded route
  constructor(private route: ActivatedRoute) { }

  //snapshot of currently active route we have params of object. Snapshot only good for the first initial
  //params are an observable. Observables are by a third party, not Angular which allow you to work with asynchronous tasks. the params on current loaded route might change... so don't have to wait.
  //should take the params approach to be save against changes not being reflected intemplate
  //use susbscribe to be informed about any changes in your route parameters.
  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.paramsSuscription = this.route.params
    .subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  //not necessary but to help understand what happens behind the scenes
  ngOnDestroy() {
    this.paramsSuscription.unsubscribe();
  }

}
