import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card-match',
  templateUrl: './card-match.component.html',
  styleUrls: ['./card-match.component.scss'],
})
export class CardMatchComponent {
  @Input() cardContent: any[] = [];
  @Input() game?: string;
  page = 1;
  constructor(private router: Router) {}

  click(evt: any) {
    console.log(evt);
    if (this.game === 'League of Legends') {
      this.game = 'lol';
      if (evt.state != 'completed') {
        this.router.navigateByUrl(`${this.game}/matches/live/${evt.id}`);
      }
    } else {
      this.router.navigateByUrl(`${this.game}/matches/history/${evt.match.id}`);
    }
    if (this.game === 'Valorant') {
      this.game = 'valorant';
      this.router.navigateByUrl(`${this.game}/matches/live/${evt.match.id}`);
    }
  }
}
