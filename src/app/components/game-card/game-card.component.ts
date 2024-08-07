import { Component, input, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})
export class GameCardComponent {


  @Input()
  imagePath: string = "../../../../assets/Cyberpunk_2077.png"
  gameFooter: boolean = false
  

  onMouseEnter() {
    
    this.gameFooter = true
  }

  onMouseLeave() {
   
    this.gameFooter = false
  }

  constructor() {}
  
  ngOnInit(): void {}
}
