import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './components/main-content/main-content.component';
import { AddPersonComponent } from './components/shared/add-person/add-person.component';
import { AdoptPersonComponent } from './components/shared/adopt-person/adopt-person.component';
import { ListPersonComponent } from './components/shared/list-person/list-person.component';

const routes: Routes = [
  {
    path: 'add-person',
    component: AddPersonComponent
  },
  {
    path: 'list-person',
    component: ListPersonComponent
  },
  {
    path: 'adopt-person',
    component: AdoptPersonComponent
  },
  {
    path: 'home',
    component: MainContentComponent
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
