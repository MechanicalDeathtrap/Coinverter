import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConverterBlockComponent} from "./components/converter-block/converter-block.component";

const routes: Routes = [
  {
    path: '',
    component: ConverterBlockComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
