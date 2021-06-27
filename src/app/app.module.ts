import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import {NavBarComponent} from './shared/navBar/navBar.component';
import {FooterComponent} from './shared/footer/footer.component';
import {HomeComponent} from './home/home.component';
import {SliderComponent} from './slider/slider.component';
import {ContactFormComponent} from './contactForm/contactForm.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './pageNotFound/notFound.component'

@NgModule({
  declarations: [
    AppComponent, NavBarComponent, HomeComponent,SliderComponent,ContactFormComponent,FooterComponent,AboutComponent,ContactComponent,PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
