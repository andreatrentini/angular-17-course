import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputModelContainerComponent } from './input-model-container.component';

describe('InputModelContainerComponent', () => {
  let component: InputModelContainerComponent;
  let fixture: ComponentFixture<InputModelContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputModelContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputModelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
