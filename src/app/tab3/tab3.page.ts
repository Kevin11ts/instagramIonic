import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  reels = [
    {
      username: 'kevints.1',
      avatarUrl: 'https://images7.memedroid.com/images/UPLOADED627/627a677e6e34c.jpeg',
      videoUrl: 'https://videos.pexels.com/video-files/2709902/2709902-sd_640_360_25fps.mp4',
      music: 'Música de fondo',
      likes: '1.2k',
      comments: '345',
      description: 'Este es un reel de ejemplo.',
    },
    {
      username: 'usuario2',
      avatarUrl: 'https://via.placeholder.com/150',
      videoUrl: 'https://videos.pexels.com/video-files/2709902/2709902-sd_640_360_25fps.mp4',
      music: 'Otra música',
      likes: '2.5k',
      comments: '500',
      description: 'Otro reel de ejemplo.',
    },
    // Agrega más reels si es necesario
  ];


  constructor() {}

}
