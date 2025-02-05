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
  @Input() share: string = '';

  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  @ViewChild('reelCard', { static: false }) reelCard!: ElementRef<HTMLElement>;

  liked: boolean = false;
  saved: boolean = false;
  

  constructor() {}

  ngOnInit() {
    // No reproducir automáticamente el video al inicializarse
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.pause();
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

  show() {
    this.reelCard.nativeElement.classList.remove('hidden');
    this.videoPlayer.nativeElement.muted = false; // Activa el sonido
    this.videoPlayer.nativeElement.play(); // Reproduce el video
  }

  hide() {
    this.reelCard.nativeElement.classList.add('hidden');
    this.videoPlayer.nativeElement.muted = true; // Silencia el video
    this.videoPlayer.nativeElement.pause(); // Pausa el video
  }
}