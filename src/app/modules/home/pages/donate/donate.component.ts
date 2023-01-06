import { environment } from './../../../../../environments/environment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  copiado= false
  constructor() { }

  ngOnInit() {
  }

  copyCode(){
    this.copiado = true
    navigator.clipboard.writeText(environment.PIX_CODE);

    setTimeout(() => this.copiado = false, 1500)
  }

}
