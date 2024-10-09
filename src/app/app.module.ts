import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Mfe2ComponentModule } from './mfe2-component/mfe2-component.module';
export const routes: Routes = [];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), Mfe2ComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
