import { MyComponentComponent } from './components/my-component/my-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { PlaygroundComponent } from './components/playground/playground.component';

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
    path: 'playground',
    component: PlaygroundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
