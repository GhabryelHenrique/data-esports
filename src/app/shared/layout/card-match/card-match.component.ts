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
  @Input() isHistory: boolean = false;

  pageOfItems: any[] =[]
  page = 1;

  constructor(private router: Router) {}

  click(evt: any) {
    if(evt.state === 'unstarted') return
    if (this.game === 'League of Legends') {
      this.game = 'lol';
    }
    if (this.game === 'Valorant') {
      this.game = 'valorant';
    }

    if (evt.state != 'completed' && !this.isHistory) {
      this.router.navigateByUrl(`${this.game}/matches/live/${evt.id}`);
    } else {
      localStorage.setItem('matchDetails', evt.match);
      this.router.navigateByUrl(`${this.game}/matches/history/${evt.match.id}`);
    }
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
}
