import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ConverterBlockComponent} from "./components/converter-block/converter-block.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ConverterBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    ConverterBlockComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
