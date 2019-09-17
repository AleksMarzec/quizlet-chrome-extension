import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PopupComponent } from './popup/popup.component';
import { BackgroundComponent } from './background/background.component';

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'event-page', component: BackgroundComponent },
  { path: 'popup', component: PopupComponent },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
