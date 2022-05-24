import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicacoesDestaqueComponent } from './publicacoes-destaque.component';

describe('PublicacoesDestaqueComponent', () => {
  let component: PublicacoesDestaqueComponent;
  let fixture: ComponentFixture<PublicacoesDestaqueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacoesDestaqueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicacoesDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
