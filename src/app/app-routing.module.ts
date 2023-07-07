import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ProjectComponent } from './project/project.component';
import { ServicesComponent } from './services/services.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BusinessContactsComponent } from './business-contacts/business-contacts.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { AuthGuard } from './business-contacts/auth.guard';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutmeComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactmeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'businessContact', component: BusinessContactsComponent, canActivate: [AuthGuard] },
  { path: 'contacts/update/:id', component: UpdateContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
