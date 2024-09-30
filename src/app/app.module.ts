import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MfeComponentModule } from './mfe-component/mfe-component.module';
import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), MfeComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
