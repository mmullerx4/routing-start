import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  //inject & get access to the currently loaded route
  constructor(private routea: ActivatedRoute) { }

  //snapshot of currently active route we have params of object
  ngOnInit() {
    this.user = {
      id: this.routea.snapshot.params['id'],
      name: this.routea.snapshot.params['name']
    }
  }

}
