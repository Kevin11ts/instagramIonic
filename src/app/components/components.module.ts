import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { IonicModule } from '@ionic/angular';
import { CardPostComponent } from './card-post/card-post.component';
import { ReelsComponent } from './reels/reels.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    LayoutComponent,
    CardPostComponent,
    SearchComponent,
    ReelsComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    IonicModule
  ],
  exports: [
  LayoutComponent,
  CardPostComponent,
  SearchComponent,
  ReelsComponent
  ]
})
export class ComponentsModule { }
