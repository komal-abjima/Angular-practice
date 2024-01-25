import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

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

    // by using Resolve guard
    this.route.data.subscribe((data: Data) =>{
        this.server = data['server'];
    })


    // it default taking id as a string so we convert it into a number by using + sign
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params
    // .subscribe((params: Params) =>{
    //   this.server = this.serversService.getServer(+params['id']);
    // })
  }

  editBtn(){
    this.router.navigate(['edit'], {relativeTo:this.route, queryParamsHandling: 'preserve'});
  }

}
