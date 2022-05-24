import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardAutorPageRoutingModule } from './dashboard-autor-routing.module';

import { DashboardAutorPage } from './dashboard-autor.page';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ToolbarComponent } from 'src/app/componentes/toolbar/toolbar/toolbar.component';
import { FooterComponent } from 'src/app/componentes/footer/footer/footer.component';
import { BarChartComponent } from 'src/app/componentes/charts/bar-chart/bar-chart.component';
import { AdvancedChartComponent } from 'src/app/componentes/charts/advanced-chart/advanced-chart.component';
import { NovaPublicacaoComponent } from 'src/app/componentes/autor/nova-publicacao/nova-publicacao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardAutorPageRoutingModule,
    NgxChartsModule
  ],
  declarations: [DashboardAutorPage, ToolbarComponent, FooterComponent, BarChartComponent, AdvancedChartComponent, NovaPublicacaoComponent]
})
export class DashboardAutorPageModule {}
