import { Component, OnInit } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  standalone: true,
  imports: [MatProgressSpinnerModule]
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
