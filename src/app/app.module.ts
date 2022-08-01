import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BlockComponent } from './block/block.component';
import { OurProjectComponent } from './our-project/our-project.component';
import { OurAwardsComponent } from './our-awards/our-awards.component';
import { OurClientComponent } from './our-client/our-client.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    BlockComponent,
    OurProjectComponent,
    OurAwardsComponent,
    OurClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
