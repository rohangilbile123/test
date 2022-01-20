import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ProductComponent } from './product/product.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {path:'hello-world',component:HelloWorldComponent},
  {path:'project',component:ProjectComponent},
  {path:'employee-list',component:EmployeeListComponent},
  {path:'employee-detail',component:EmployeeDetailComponent},
  {path:'product',component:ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
