import { Component, Input } from '@angular/core';
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
  imagePath: string = "../../../../assets/Cyberpunk_2077.png";
  
  @Input()
  gameFooter: boolean = false;

  private hoverTimeout: any;
  onMouseEnter() {
    // Define um atraso de 0.5 segundos antes de mostrar o texto
    this.hoverTimeout = setTimeout(() => {
      this.gameFooter = true;
    }, 300); // 500 milissegundos de atraso
  }

  onMouseLeave() {
    // Limpa o timeout para evitar o atraso na remoção do texto
    clearTimeout(this.hoverTimeout);
    // Remove o texto imediatamente
    this.gameFooter = false;
  }

  constructor() {}
  
  ngOnInit(): void {}
}
