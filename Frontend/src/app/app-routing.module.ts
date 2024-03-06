import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { DisplayPageComponent } from './display-page/display-page.component';

const routes: Routes = [
  {path:"upload", component:UploadPageComponent},
  {path:"display", component:DisplayPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}

)
export class AppRoutingModule { 

}
