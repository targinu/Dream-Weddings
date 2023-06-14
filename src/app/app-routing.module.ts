import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ContatoComponent } from './contato/contato.component';
import { ThanksComponent } from './thanks/thanks.component';
import { PreWeddingComponent } from './portifolio/pre-wedding/pre-wedding.component';
import { AndersonEGiovannaComponent } from './portifolio/pre-wedding/anderson-e-giovanna/anderson-e-giovanna.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'portifolio', component: PortifolioComponent },
  { path: 'portifolio/pre-wedding', component: PreWeddingComponent },
  { path: 'portifolio/pre-wedding/anderson-e-giovanna', component: AndersonEGiovannaComponent},
  { path: 'contato', component: ContatoComponent },
  { path: 'thanks.html', component: ThanksComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
