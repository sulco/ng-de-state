import { NgModule } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ProgressBarModule } from 'primeng/progressbar';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  exports: [
    TabViewModule,
    DropdownModule,
    InputTextModule,
    CheckboxModule,
    ProgressBarModule,
    TabMenuModule,
    ButtonModule,
    CardModule
  ]
})
export class SharedModule {}
