import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HelplineComponent } from './helpline/helpline.component';
import { HomeComponent } from './home/home.component';
import { PreventionComponent } from './prevention/prevention.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SymptomsComponent } from './symptoms/symptoms.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'helpline', component: HelplineComponent },
  { path: 'symptoms', component: SymptomsComponent },
  { path: 'preventions', component: PreventionComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'privacy', component: PrivacyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
