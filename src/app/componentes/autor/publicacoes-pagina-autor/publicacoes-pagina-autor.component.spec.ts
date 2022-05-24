import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicacoesPaginaAutorComponent } from './publicacoes-pagina-autor.component';

describe('PublicacoesPaginaAutorComponent', () => {
  let component: PublicacoesPaginaAutorComponent;
  let fixture: ComponentFixture<PublicacoesPaginaAutorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacoesPaginaAutorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicacoesPaginaAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
