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
import { TerminalComponent } from './components/terminal/terminal.component';
import { FormsModule, NgForm } from '@angular/forms';
import { FrameComponent } from './components/frame/frame.component';
import { SafePipe } from './pipes/safe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FileSystemComponent } from './components/file-system/file-system.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MyComponentComponent,
    LineComponent,
    FooterComponent,
    MyJourneyComponent,
    PersonalInfoComponent,
    TerminalComponent,
    FrameComponent,
    SafePipe,
    FileSystemComponent
  ],
  entryComponents: [
    FrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialExampleModule,
    BrowserAnimationsModule,
    NgScrollbarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
