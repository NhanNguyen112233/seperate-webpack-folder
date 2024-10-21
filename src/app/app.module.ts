import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { ButtonComponent, CheckboxComponent } from 'admin-core-web-libs';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonComponent,
    CheckboxComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
