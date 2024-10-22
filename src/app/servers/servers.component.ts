import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  //ActivatedRoute injects the current active route
  constructor(private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute) {

    }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload() {
    //this.router.navigate(['servers'], {relativeTo: this.route}); //relativeTo to tell navigate figure where we are compared to the root or active route
  }

}
