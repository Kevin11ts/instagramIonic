import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: false
})
export class SearchComponent implements OnInit {
  @Input() content: any[] = []; // Arreglo de contenido (imágenes o videos)

  constructor() {}

  ngOnInit() {
    console.log('SearchComponent inicializado');

    setTimeout(() => {
      const videos: NodeListOf<HTMLVideoElement> = document.querySelectorAll('video');
      videos.forEach((video) => {
        video.muted = true;  // Asegura que el video esté en silencio
        video.play().catch(error => console.log('Error reproduciendo el video:', error));
      });
    }, 1000);
  }

  // Método para verificar si el contenido es una imagen
  isImage(url: string): boolean {
    return /\.(jpeg|jpg|gif|png)$/i.test(url);
  }

  // Método para verificar si el contenido es un video
  isVideo(url: string): boolean {
    return /\.(mp4|webm|ogg)$/i.test(url);
  }
}
