import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'card-match',
  templateUrl: './card-match.component.html',
  styleUrls: ['./card-match.component.scss'],
  providers: [MessageService]
})
export class CardMatchComponent {
  @Input() cardContent: any[] = [];
  @Input() game?: string;
  @Input() isHistory: boolean = false;

  pageOfItems: any[] =[]
  page = 1;

  constructor(private router: Router, private messageService: MessageService) {}

  click(evt: any) {
    if(evt.state === 'unstarted') {
      this.messageService.add({severity:'error', summary:'Erro', detail:'Esse jogo ainda não possui dados. Aguarde seu Inicio!'});
      return
    }
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
