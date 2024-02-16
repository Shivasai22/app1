
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { PipeSqrt } from './custompipe/custompipe.component';
import { AppComponent } from './app.component';
//import { CustompipePipe } from './custompipe.pipe';
import { SquarerootPipe } from './squareroot.pipe';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
   declarations: [SquarerootPipe],
  imports: [
  ],
  exports:[SquarerootPipe],
  bootstrap:[]
})
export class AppModule { }
