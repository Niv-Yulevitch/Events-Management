import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './components/data-area/add-data/add-data.component';
import { ListDataComponent } from './components/data-area/list-data/list-data.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: "list", component: ListDataComponent },
    { path: "add", component: AddDataComponent },
    { path: "", redirectTo: "/list", pathMatch: "full" },
    { path: "**", component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
