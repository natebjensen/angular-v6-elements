import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

import { createCustomElement } from '@angular/elements';
import { CustomElementComponent } from './custom-element/custom-element.component';

@NgModule({
  declarations: [
    CustomElementComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents:[CustomElementComponent],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(CustomElementComponent, { injector: this.injector });
    customElements.define('app-custom-element', el);
   }
}
