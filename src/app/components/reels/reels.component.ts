import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-reels',
  templateUrl: './reels.component.html',
  styleUrls: ['./reels.component.scss'],
  standalone: false
})
export class ReelsComponent implements OnInit {
  @Input() username: string = '';
  @Input() avatarUrl: string = '';
  @Input() videoUrl: string = '';
  @Input() music: string = '';
  @Input() likes: string = '0';
  @Input() comments: string = '0';
  @Input() description: string = '';

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  liked: boolean = false;
  saved: boolean = false;

  constructor() {}

  ngOnInit() {
    // Reproduce el video automáticamente al cargarse
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.play();
    }
  }

  toggleLike() {
    this.liked = !this.liked;
  }

  toggleSave() {
    this.saved = !this.saved;
  }

  togglePlay() {
    const video = this.videoPlayer.nativeElement;
    video.paused ? video.play() : video.pause();
  }
}
