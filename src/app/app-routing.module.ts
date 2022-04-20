import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestOneComponent } from './test-one/test-one.component';
import { TestThreeComponent } from './test-three/test-three.component';

const routes: Routes = [
  {path:"test-one",component:TestOneComponent},
  {path:"test-three",component:TestThreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
