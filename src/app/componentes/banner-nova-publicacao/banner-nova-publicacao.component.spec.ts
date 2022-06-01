import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BannerNovaPublicacaoComponent } from './banner-nova-publicacao.component';

describe('BannerNovaPublicacaoComponent', () => {
  let component: BannerNovaPublicacaoComponent;
  let fixture: ComponentFixture<BannerNovaPublicacaoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerNovaPublicacaoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BannerNovaPublicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
