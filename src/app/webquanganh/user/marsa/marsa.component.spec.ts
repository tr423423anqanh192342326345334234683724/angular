import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsaComponent } from './marsa.component';

describe('MarsaComponent', () => {
  let component: MarsaComponent;
  let fixture: ComponentFixture<MarsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarsaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
