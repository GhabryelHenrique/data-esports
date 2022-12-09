import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  gamesList: any = [
    {
      name: 'League of Legends',
      icon: '../../../../assets/svg/icons8-league-of-legends.svg',
      router: '/lol',
      dropdown: [
        {
          name: 'Ao Vivo',
          router: '/lol/live',
        },
        {
          name: 'Ligas',
          router: '/lol/leagues',
        },
        {
          name: 'Partidas',
          router: '/lol/matches',
        },
        {
          name: 'Players',
          router: '/lol/players',
        },
        {
          name: 'Times',
          router: '/lol/teams',
        },
      ],
    },
    {
      name: 'Valorant',
      icon: '../../../../assets/svg/icons8-valorant.svg',
      router: '/valorant',
    },
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goTo(event: any) {
    this.router.navigateByUrl(event);
  }
}
