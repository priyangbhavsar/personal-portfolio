import { MyComponentComponent } from './components/my-component/my-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

const routes: Routes = [
  {
    path:'',
    component: MyComponentComponent
  },
  {
    path: 'contact',
    component: ContactMeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
