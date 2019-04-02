import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ImgyApiService } from './imgy-api.service';
import { HttpClientModule } from '@angular/common/http';
import { HidepagesService } from './service/hidepages.service';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuardService } from './service/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    GalleryComponent,
    SigninComponent,
    SignupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ImgyApiService,
    HidepagesService,
    AuthGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
