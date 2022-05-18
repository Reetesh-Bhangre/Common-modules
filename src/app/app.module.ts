import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomInputModule } from 'projects/common-module-lib/src/lib/custom-input/custom-input.module';
import { GridModule } from 'projects/common-module-lib/src/lib/grid/grid.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CustomInputModule,
    GridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
