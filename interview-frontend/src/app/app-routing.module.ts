import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { CitiesComponent } from './components/cities/cities.component';

const routes: Routes = [
  {
    path: '',
    component: IntroductionComponent,
  },
  {
    path: 'cities',
    component: CitiesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
