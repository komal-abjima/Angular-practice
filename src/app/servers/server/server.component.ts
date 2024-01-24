import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // it default taking id as a string so we convert it into a number by using + sign
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(1);
    this.route.params
    .subscribe((params: Params) =>{
      this.server = this.serversService.getServer(+params['id']);
    })
  }

  editBtn(){
    this.router.navigate(['edit'], {relativeTo:this.route, queryParamsHandling: 'preserve'});
  }

}
