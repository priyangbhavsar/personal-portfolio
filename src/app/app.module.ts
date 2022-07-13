import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { MaterialExampleModule } from './material.module';
import { LineComponent } from './components/line/line.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyJourneyComponent } from './components/my-journey/my-journey.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { NgScrollbar, NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MyComponentComponent,
    LineComponent,
    FooterComponent,
    MyJourneyComponent,
    PersonalInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialExampleModule,
    BrowserAnimationsModule,
    NgScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
