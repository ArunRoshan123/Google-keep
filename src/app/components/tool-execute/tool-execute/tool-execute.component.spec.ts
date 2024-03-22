import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolExecuteComponent } from './tool-execute.component';

describe('ToolExecuteComponent', () => {
  let component: ToolExecuteComponent;
  let fixture: ComponentFixture<ToolExecuteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolExecuteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolExecuteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
