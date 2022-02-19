import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { IndexhomeComponent } from './components/indexhome/indexhome.component';
import { AllSvgsComponent } from './components/all-svgs/all-svgs.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { ComingSoonComponent } from './views/coming-soon/coming-soon.component';
import { CareersComponent } from './views/careers/careers.component';
import { SecondaryFooterComponent } from './components/secondary-footer/secondary-footer.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { DeliveryLocationComponent } from './components/delivery-location/delivery-location.component';
import { HomeGroceryComponent } from './desktop/views/home-grocery/home-grocery.component';
import { AppDevelopmentComponent } from './desktop/views/app-development/app-development.component';
import { ApplicationServicesComponent } from './desktop/views/application-services/application-services.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    IndexhomeComponent,
    AllSvgsComponent,
    FooterComponent,
    ContactUsComponent,
    ComingSoonComponent,
    CareersComponent,
    SecondaryFooterComponent,
    AboutUsComponent,
    DeliveryLocationComponent,
    HomeGroceryComponent,
    AppDevelopmentComponent,
    ApplicationServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
