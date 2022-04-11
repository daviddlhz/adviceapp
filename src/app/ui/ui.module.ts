import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { uiRoutes } from './ui.routing';
import { HttpClientModule } from '@angular/common/http';
import { adviceProvider } from '@domain/advice/advice.provider';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(uiRoutes)
  ],
  providers: [adviceProvider]
})
export class UiModule { }
