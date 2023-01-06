import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'card-match',
  templateUrl: './card-match.component.html',
  styleUrls: ['./card-match.component.scss'],
  providers: [MessageService]
})
export class CardMatchComponent implements OnInit{
  @Input() cardContent: any[] = [];
  @Input() game?: string;
  @Input() isHistory: boolean = false;
  @Output() proximaPagina: EventEmitter<Event> = new EventEmitter();

  pageOfItems: any[] =[]
  pager: any = {
    totalItems: 10,
        currentPage: 1,
        pageSize: 10,
        totalPages: 10,
        startPage: 1,
        endPage: 9,
        startIndex: 1,
        endIndex: 2,
        pages: []
  }
  initialPage = {page: 0}

  constructor(private router: Router, private messageService: MessageService, private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.setPage(this.initialPage);
  }

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

  clickEventHandler(event: Event){
    this.proximaPagina.emit(event)
  }

  setPage(page: any) {
    // get new pager object for specified page
    this.pager = this.paginate(this.cardContent.length, (page.page + 1), page.rows, this.pager.maxPages);

    // get new page of items from items array
    var pageOfItems = this.cardContent.slice(this.pager.startIndex, this.pager.endIndex + 1);

    // call change page function in parent component
    this.pageOfItems = pageOfItems
}


  paginate(
    totalItems: number,
    currentPage: number = 1,
    pageSize: number = 10,
    maxPages: number = 10
) {
    // calculate total pages
    let totalPages = Math.ceil(totalItems / pageSize);

    // ensure current page isn't out of range
    if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    let startPage: number, endPage: number;
    if (totalPages <= maxPages) {
        // total pages less than max so show all pages
        startPage = 1;
        endPage = totalPages;
    } else {
        // total pages more than max so calculate start and end pages
        let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
            // current page near the start
            startPage = 1;
            endPage = maxPages;
        } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            // current page near the end
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        } else {
            // current page somewhere in the middle
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }

    // calculate start and end item indexes
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    // return object with all pager properties required by the view
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
}
}
