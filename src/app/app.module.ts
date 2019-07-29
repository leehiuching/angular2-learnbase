import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular

import { AppComponent } from './app.component';
import { TemplateSyntaxComponent } from './template-syntax/template-syntax.component';
import { ModelSyntaxComponent } from './model-syntax/model-syntax.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { SizerComponent } from './sizer/sizer.component';
import { HeroSwitchComponent } from './hero-switch/hero-switch.component';
import { BigHeroDetailComponent, HeroDetailComponent } from './app-hero-detail/app-hero-detail.component';
import { ClickDirective, ClickDirective2 } from './click.directive';
import { UserInputComponent } from './user-input/user-input.component';
import { ClickMeComponent } from './click-me/click-me.component';
import { KeyupComponent } from './keyup/keyup.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateSyntaxComponent,
    ModelSyntaxComponent,
    ChildComponentComponent,
    SizerComponent,
    HeroSwitchComponent,
    HeroDetailComponent,
    BigHeroDetailComponent,
    ClickDirective,
    ClickDirective2,
    UserInputComponent,
    ClickMeComponent,
    KeyupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // <--- import into the NgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
