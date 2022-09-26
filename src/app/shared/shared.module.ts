import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsProviderModule } from './icons-provider.module';
import { AntDesignModule } from './ant-design.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IconsProviderModule,
    AntDesignModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    DirectivesModule,
  ],
  exports: [
    IconsProviderModule,
    AntDesignModule,
    ReactiveFormsModule,
    FormsModule,
    PipesModule,
    DirectivesModule,
  ],
})
export class SharedModule {}
