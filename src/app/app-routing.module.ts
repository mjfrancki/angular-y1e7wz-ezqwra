import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DragDropBasicComponent } from "./drag-drop-basic/drag-drop-basic.component";
import { DragDropOrderedListComponent } from "./drag-drop-ordered-list/drag-drop-ordered-list.component";


const routes: Routes = [
  { path: "", redirectTo: "/DragDropBasic", pathMatch: "full" },
  { path: "DragDropBasic", component: DragDropBasicComponent },
  { path: "DragDropOrderedList", component: DragDropOrderedListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
