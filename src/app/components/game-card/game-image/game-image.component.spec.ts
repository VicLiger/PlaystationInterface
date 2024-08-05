import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameImageComponent } from './game-image.component';

describe('GameImageComponent', () => {
  let component: GameImageComponent;
  let fixture: ComponentFixture<GameImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
