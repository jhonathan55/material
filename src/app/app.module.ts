import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//compoenente
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from './modules/material/material.module';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './components/auth/auth.component';
import { CrmComponent } from './components/crm/crm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductComponent,
    AuthComponent,
    CrmComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
