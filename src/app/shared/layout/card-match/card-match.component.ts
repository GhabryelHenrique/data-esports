import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'card-match',
  templateUrl: './card-match.component.html',
  styleUrls: ['./card-match.component.scss'],
  providers: [MessageService]
})
export class CardMatchComponent implements OnInit {
  @Input() cardContent: any[] = [];
  @Input() game?: string;
  @Input() isHistory: boolean = false;
  @Input() isLive: boolean = false;

  pageOfItems: any[] =[]
  page = 1;

  constructor(private router: Router, private messageService: MessageService) {}

  ngOnInit(): void {
   this.replacePagination()
  }

  replacePagination() {
    const elements = document.getElementsByClassName('page-link');
    if(this.isLive){
    let pagination = document.getElementsByClassName('paginação');
    pagination[0].innerHTML = ''
    }

    for (let i = 0; i < elements.length; i++) {
      if(elements[i].innerHTML === 'First'){
        let txt = elements[i].innerHTML.replace("First", "<<");
        elements[i].innerHTML = txt;
      }
      if(elements[i].innerHTML === 'Last'){
        let txt = elements[i].innerHTML.replace("Last", ">>");
        elements[i].innerHTML = txt;
      }
      if(elements[i].innerHTML === 'Next'){
        let txt = elements[i].innerHTML.replace("Next", ">");
        elements[i].innerHTML = txt;
      }
      if(elements[i].innerHTML === 'Previous'){
        let txt = elements[i].innerHTML.replace("Previous", "<");
        elements[i].innerHTML = txt;
      }
    }
  }

  selectgame(evt: any) {
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
    this.replacePagination()
    this.pageOfItems = pageOfItems;
}
}
