import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/header/header.component';
import { MaterialModule } from './material/material.module';
import { FooterComponent } from './core/footer/footer.component';
import { FooterDarkComponent } from './core/footer-dark/footer-dark.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { CarrosselComponent } from './core/carrossel/carrossel.component';
import { HeaderMobileComponent } from './core/header-mobile/header-mobile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ContatoComponent } from './contato/contato.component';
import { ThanksComponent } from './thanks/thanks.component';
import { HeaderDarkComponent } from './core/header-dark/header-dark.component';
import { PreWeddingComponent } from './portifolio/pre-wedding/pre-wedding.component';
import { AndersonEGiovannaComponent } from './portifolio/pre-wedding/anderson-e-giovanna/anderson-e-giovanna.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FooterDarkComponent,
    HomeComponent,
    CarrosselComponent,
    HeaderMobileComponent,
    NotFoundComponent,
    PortifolioComponent,
    ContatoComponent,
    ThanksComponent,
    HeaderDarkComponent,
    PreWeddingComponent,
    AndersonEGiovannaComponent,
  ],
  imports: [
    //@angular
    MaterialModule,
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule

    //app
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
