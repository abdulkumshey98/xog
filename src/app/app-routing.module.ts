  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { IndexhomeComponent } from './components/indexhome/indexhome.component';
  import { TopnavComponent } from './components/topnav/topnav.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { CareersComponent } from './views/careers/careers.component';
import { ComingSoonComponent } from './views/coming-soon/coming-soon.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';

  const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    {path: '', component: TopnavComponent, data: { title : "Welcome to Xevello"}},
    {path: 'home', component: IndexhomeComponent, data: { title : "Welcome "}},
    {path: 'contact-us', component: ContactUsComponent, data: { title : "Welcome "}},
    {path: 'coming-soon', component: ComingSoonComponent, data: { title : "Welcome "}},
    {path: 'careers', component: CareersComponent, data: { title : "Welcome "}},
    {path: 'about-us', component: AboutUsComponent, data: { title : "About Us | Xevello Consulting Services"}}
  ]

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingComponent = []
