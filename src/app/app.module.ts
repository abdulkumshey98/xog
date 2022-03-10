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
import { BusinessStrategyComponent } from './desktop/views/business-strategy/business-strategy.component';
import { CaseStudiesComponent } from './desktop/views/case-studies/case-studies.component';
import { WebDesignComponent } from './desktop/views/web-design/web-design.component';
import { AppDevComponent } from './desktop/views/app-dev/app-dev.component';
import { WebDevComponent } from './desktop/views/web-dev/web-dev.component';
import { BrandingComponent } from './desktop/views/branding/branding.component';
import { CloudSolutionsComponent } from './desktop/views/cloud-solutions/cloud-solutions.component';
import { CyberSecurityComponent } from './desktop/views/cyber-security/cyber-security.component';
import { DigitalStrategyComponent } from './desktop/views/digital-strategy/digital-strategy.component';
import { ECommerceComponent } from './desktop/views/e-commerce/e-commerce.component';
import { LogoDesignComponent } from './desktop/views/logo-design/logo-design.component';
import { AdvertisingComponent } from './desktop/views/advertising/advertising.component';
import { SeoComponent } from './desktop/views/seo/seo.component';
import { SoftwareDevelopmentComponent } from './desktop/views/software-development/software-development.component';
import { UserExperienceComponent } from './desktop/views/user-experience/user-experience.component';
import { ProductPackagingComponent } from './desktop/views/product-packaging/product-packaging.component';
import { QualityEngineeringComponent } from './desktop/views/quality-engineering/quality-engineering.component';
import simpleParallax from 'simple-parallax-js';

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
    ApplicationServicesComponent,
    BusinessStrategyComponent,
    CaseStudiesComponent,
    WebDesignComponent,
    AppDevComponent,
    WebDevComponent,
    BrandingComponent,
    CloudSolutionsComponent,
    CyberSecurityComponent,
    DigitalStrategyComponent,
    ECommerceComponent,
    LogoDesignComponent,
    AdvertisingComponent,
    SeoComponent,
    SoftwareDevelopmentComponent,
    UserExperienceComponent,
    ProductPackagingComponent,
    QualityEngineeringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
