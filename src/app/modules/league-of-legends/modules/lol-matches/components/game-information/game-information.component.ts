import { Frame, GameDetails } from './../../../models/lol-game-detais.model';
import { Component, Input, OnInit } from '@angular/core';
import { Dragons } from '../../../../../../core/model/dragons-file.model';

@Component({
  selector: 'app-game-information',
  templateUrl: './game-information.component.html',
  styleUrls: ['./game-information.component.scss'],
})
export class GameInformationComponent implements OnInit {
  @Input() gameInfo: any;

  constructor() {}

  ngOnInit(): void {
  }

  verifyDragon(dragon: string){
    switch(dragon) {
      case 'infernal':
        return Dragons.infernal
      case 'cloud':
        return Dragons.cloud
      case 'ocean':
        return Dragons.ocean
      case 'mountain':
        return Dragons.mountain
      case 'elder':
        return Dragons.elder
      case 'chemtech':
        return Dragons.chemtech
      case 'hextech':
        return Dragons.hextech
      default:
        return ''
    }
  }
}
