import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveHelperComponent } from './components/responsive-helper/responsive-helper.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { PasswordStrenthComponent } from './components/password-strenth/password-strenth.component';

@NgModule({
  declarations: [ResponsiveHelperComponent, ClickOutsideDirective, PasswordStrenthComponent],
  imports: [CommonModule],
  exports: [ResponsiveHelperComponent, ClickOutsideDirective],
})
export class SharedModule {}
