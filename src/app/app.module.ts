import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular

import { AppComponent } from './app.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { ModelSyntaxComponent } from './model-syntax/model-syntax.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { SizerComponent } from './sizer/sizer.component';
import { HeroSwitchComponent } from './hero-switch/hero-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateSyntaxComponent,
    ModelSyntaxComponent,
    ChildComponentComponent,
    SizerComponent,
    HeroSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // <--- import into the NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
