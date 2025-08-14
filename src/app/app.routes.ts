import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Movimentos } from './pages/movimentos/movimentos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'movimentos', component: Movimentos }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}