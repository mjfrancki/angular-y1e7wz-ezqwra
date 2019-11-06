import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './app/material-module';
import { AppRoutingModule } from "./app/app-routing.module";
import { DragDropBasicComponent } from "./app/drag-drop-basic/drag-drop-basic.component";
import { DragDropOrderedListComponent } from "./app/drag-drop-ordered-list/drag-drop-ordered-list.component";
import {CdkDragDropOverviewExample} from './app/cdk-drag-drop-overview-example';



@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  entryComponents: [CdkDragDropOverviewExample],
  declarations: [
                  CdkDragDropOverviewExample,
                  DragDropBasicComponent,
                  DragDropOrderedListComponent],

  bootstrap: [CdkDragDropOverviewExample],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */