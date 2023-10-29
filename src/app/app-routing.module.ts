import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanerComponent } from './Components/baner/baner.component';
import { PersonalInformationComponent } from './Components/personal-information/personal-information.component';
 
const routes: Routes = [
  {path:"*",component: BanerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
