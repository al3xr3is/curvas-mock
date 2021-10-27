import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestanteGestacaoFormPage } from './gestante-gestacao-form.page';

describe('GestanteGestacaoFormPage', () => {
  let component: GestanteGestacaoFormPage;
  let fixture: ComponentFixture<GestanteGestacaoFormPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GestanteGestacaoFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestanteGestacaoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
