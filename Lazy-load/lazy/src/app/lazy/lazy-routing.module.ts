import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {LazyComponent} from "./lazy/lazy.component";

const routes: Routes = [
  {path:"", component: LazyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
