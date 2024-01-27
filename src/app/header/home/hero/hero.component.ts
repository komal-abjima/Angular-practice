import { Component } from '@angular/core';
import { SubscribeService } from '../../../services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  constructor(private subscribeService: SubscribeService){}

  onSubscribe(){
    // alert('Thank you for subscribing, you can access the services now..')
    this.subscribeService.onSubscribeClicked();
  }

}
