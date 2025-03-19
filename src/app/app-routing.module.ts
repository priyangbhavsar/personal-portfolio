import { MyComponentComponent } from './components/my-component/my-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { TypingTestComponent } from './components/typing-test/typing-test.component';

const routes: Routes = [
  {
    path:'',
    component: MyComponentComponent
  },
  {
    path: 'contact',
    component: ContactMeComponent
  },
  {
    path: 'test',
    component: TypingTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
