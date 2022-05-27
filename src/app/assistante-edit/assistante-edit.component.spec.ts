import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanteEditComponent } from './assistante-edit.component';

describe('AssistanteEditComponent', () => {
  let component: AssistanteEditComponent;
  let fixture: ComponentFixture<AssistanteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanteEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
