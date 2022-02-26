  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { IndexhomeComponent } from './components/indexhome/indexhome.component';
  import { TopnavComponent } from './components/topnav/topnav.component';
import { AppDevelopmentComponent } from './desktop/views/app-development/app-development.component';
import { ApplicationServicesComponent } from './desktop/views/application-services/application-services.component';
import { BusinessStrategyComponent } from './desktop/views/business-strategy/business-strategy.component';
import { HomeGroceryComponent } from './desktop/views/home-grocery/home-grocery.component';
import { WebDesignComponent } from './desktop/views/web-design/web-design.component';
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
    {path: 'grocery', component: HomeGroceryComponent, data: { title : "Xevello | Build your grocery store."}},
    {path: 'careers', component: CareersComponent, data: { title : "Welcome "}},
    {path: 'about-us', component: AboutUsComponent, data: { title : "About Us | Xevello Consulting Services"}},
    {path: 'application-services', component: ApplicationServicesComponent, data: { title : "Xevello | Application Services"}},
    {path: 'application-development', component: AppDevelopmentComponent, data: { title : "Xevello | App Development & Management"}},
    {path: 'business-strategy', component: BusinessStrategyComponent, data: { title : "Xevello | Business & Strategy"}},
    {path: 'web-design', component: WebDesignComponent, data: { title : "Xevello | Business & Strategy"}}
  ]

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const routingComponent = []
