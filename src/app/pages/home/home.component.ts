import { Component } from '@angular/core';
import { GameImageComponent } from "../../components/game-card/game-image/game-image.component";
import { GameCardComponent } from "../../components/game-card/game-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GameImageComponent, GameCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
