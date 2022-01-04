import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';



@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
