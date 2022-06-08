import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerBiComponent } from './power-bi.component';
import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PowerBiComponent
  ],
  imports: [
    CommonModule,
    PowerBIEmbedModule,
    HttpClientModule
  ],
  exports:[
    PowerBiComponent
  ]
})
export class PowerBIModule { }
