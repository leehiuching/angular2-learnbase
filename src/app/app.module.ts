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
import { KeyupComponent_v1 } from './keyup/keyup.component';
import { KeyupComponent_v2 } from './keyup/keyup.component';
import { KeyupComponent_v3 } from './keyup/keyup.component';
import { KeyupComponent_v4 } from './keyup/keyup.component';
import { LoopBackComponent } from './user-input/loop-back/loop-back.component';
import { LittleTourComponent } from './little-tour/little-tour.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { PeekABooParentComponent } from './lifecycle-hook/peek-a-boo-parent/peek-a-boo-parent.component';
import { PeekABooComponent } from './lifecycle-hook/peek-a-boo/peek-a-boo.component';
import { LoggerService } from "./lifecycle-hook/logger.service";

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
    KeyupComponent_v1,
    KeyupComponent_v2,
    KeyupComponent_v3,
    KeyupComponent_v4,
    LoopBackComponent,
    LittleTourComponent,
    LifecycleHookComponent,
    PeekABooParentComponent,
    PeekABooComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // <--- import into the NgModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
