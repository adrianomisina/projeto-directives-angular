import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemDiretivaComponent } from './sem-diretiva/sem-diretiva.component';
import { ComDiretivaComponent } from './com-diretiva/com-diretiva.component';
import { HightlightDirective } from './directives/highlight.directive';
import { DisabledDirective } from './directives/disabled.directive';

@NgModule({
  declarations: [
    AppComponent,
    SemDiretivaComponent,
    ComDiretivaComponent,
    HightlightDirective,
    DisabledDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
