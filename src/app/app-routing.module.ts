import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HidepagesService } from './service/hidepages.service';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: 'SignIn', component: SigninComponent, canActivate: [HidepagesService] },
  { path: 'SignUp', component: SignupComponent, canActivate: [HidepagesService] },
  { path: '**', component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
