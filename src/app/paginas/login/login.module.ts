import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { LoginComponent } from 'src/app/componentes/login/login.component';
import { ToolbarComponent } from 'src/app/componentes/toolbar/toolbar/toolbar.component';
import { FooterComponent } from 'src/app/componentes/footer/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage, LoginComponent, ToolbarComponent, FooterComponent]
})
export class LoginPageModule {}
