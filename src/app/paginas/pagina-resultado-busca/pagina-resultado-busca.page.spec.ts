import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaginaResultadoBuscaPage } from './pagina-resultado-busca.page';

describe('PaginaResultadoBuscaPage', () => {
  let component: PaginaResultadoBuscaPage;
  let fixture: ComponentFixture<PaginaResultadoBuscaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaResultadoBuscaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaResultadoBuscaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
