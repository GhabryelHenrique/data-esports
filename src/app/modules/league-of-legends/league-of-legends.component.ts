import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-of-legends',
  templateUrl: './league-of-legends.component.html',
  styleUrls: ['./league-of-legends.component.scss'],
})
export class LeagueOfLegendsComponent {
  constructor(private http: HttpClient) {}
}
