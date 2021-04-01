import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardComponent } from './pages/board/board.component';

const routes: Routes = [
  { path: '', component: BoardComponent }, /* falta guards y pagenotfound */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
