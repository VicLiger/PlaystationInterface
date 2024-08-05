import { Component } from '@angular/core';
import { GameImageComponent } from "./game-image/game-image.component";

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [GameImageComponent],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent {

}
