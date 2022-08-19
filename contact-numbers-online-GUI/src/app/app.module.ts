import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HTTP_INTERCEPTORS} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactModule } from './contact/contact.module';
import { ApiRootInterceptor } from './interceptors/api-root.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    ContactModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiRootInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
