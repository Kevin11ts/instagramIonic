import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  contentInsta = [
    {
      username: 'thetravelgirl',
      location: 'Bali, Indonesia',
      createAt: '2h ago',
      avatarUrl: 'https://i.pravatar.cc/150?img=10',
      contentUrl: 'https://images7.memedroid.com/images/UPLOADED627/627a677e6e34c.jpeg',
      liked: false,
      saved: false,
      likes: '1,234 likes',
      description: 'Disfrutando de la vida en la playa 🌊☀️'
    },
    {
      username: 'tech_guru23',
      location: 'San Francisco, USA',
      createAt: '5h ago',
      avatarUrl: 'https://i.pravatar.cc/150?img=11',
      contentUrl: 'https://images7.memedroid.com/images/UPLOADED627/627a677e6e34c.jpeg',
      liked: false,
      saved: false,
      likes: '876 likes',
      description: 'Explorando nuevas tendencias en desarrollo web 💻🚀'
    },
    {
      username: 'foodielover99',
      location: 'Roma, Italia',
      createAt: '1 day ago',
      avatarUrl: 'https://i.pravatar.cc/150?img=12',
      contentUrl: 'https://images7.memedroid.com/images/UPLOADED627/627a677e6e34c.jpeg',
      liked: false,
      saved: false,
      likes: '3,214 likes',
      description: 'La mejor pasta que he probado 🍝😍'
    },
    {
      username: 'fitness_mike',
      location: 'Miami, USA',
      createAt: '3 days ago',
      avatarUrl: 'https://i.pravatar.cc/150?img=13',
      contentUrl: 'https://images7.memedroid.com/images/UPLOADED627/627a677e6e34c.jpeg',
      liked: false,
      saved: false,
      likes: '2,010 likes',
      description: 'Día de entrenamiento intenso 💪🔥 #NoPainNoGain'
    },
    {
      username: 'adventure_king',
      location: 'Machu Picchu, Perú',
      createAt: '1 week ago',
      avatarUrl: 'https://i.pravatar.cc/150?img=14',
      contentUrl: 'https://images7.memedroid.com/images/UPLOADED627/627a677e6e34c.jpeg',
      liked: false,
      saved: false,
      likes: '4,567 likes',
      description: 'Explorando ruinas antiguas 🏔️✨ #TravelLife'
    },
    {
      username: 'gamer_dude',
      location: 'Twitch HQ',
      createAt: '2 weeks ago',
      avatarUrl: 'https://i.pravatar.cc/150?img=15',
      contentUrl: 'https://images7.memedroid.com/images/UPLOADED627/627a677e6e34c.jpeg',
      liked: false,
      saved: false,
      likes: '7,654 likes',
      description: 'Nuevo stream en camino 🎮🔥 #GamerLife'
    },
    {
      username: 'fashion_queen',
      location: 'Paris, Francia',
      createAt: '3 weeks ago',
      avatarUrl: 'https://i.pravatar.cc/150?img=16',
      contentUrl: 'https://images7.memedroid.com/images/UPLOADED627/627a677e6e34c.jpeg',
      liked: false,
      saved: false,
      likes: '9,876 likes',
      description: 'Desfile de moda en París 💃👗 #Fashionista'
    },
    {
      username: 'petlover_amy',
      location: 'Los Angeles, USA',
      createAt: '1 month ago',
      avatarUrl: 'https://i.pravatar.cc/150?img=17',
      contentUrl: 'https://images7.memedroid.com/images/UPLOADED627/627a677e6e34c.jpeg',
      liked: false,
      saved: false,
      likes: '6,543 likes',
      description: 'Mi nuevo cachorro 🐶❤️ #DogLover'
    },
    {
      username: 'photography_john',
      location: 'Tokyo, Japón',
      createAt: '2 months ago',
      avatarUrl: 'https://i.pravatar.cc/150?img=18',
      contentUrl: 'https://images7.memedroid.com/images/UPLOADED627/627a677e6e34c.jpeg',
      liked: false,
      saved: false,
      likes: '5,678 likes',
      description: 'La mejor vista nocturna de Tokio 📷🌃'
    },
    {
      username: 'artist_maria',
      location: 'Barcelona, España',
      createAt: '3 months ago',
      avatarUrl: 'https://i.pravatar.cc/150?img=19',
      contentUrl: 'https://images7.memedroid.com/images/UPLOADED627/627a677e6e34c.jpeg',
      liked: false,
      saved: false,
      likes: '8,910 likes',
      description: 'Nueva pintura inspirada en Gaudí 🎨✨'
    }
    // Agrega más objetos siguiendo esta estructura hasta llegar a 30
  ];

/*
@Input() username: string = '';
  @Input() location: string = '';
  @Input() createAt: string = '';
  @Input() avatarUrl: string = '';

  //content
  @Input() contentUrl: string = '';

  //stats
  @Input() liked: boolean = false;
  @Input() saved: boolean = false;

  //info
  @Input() likes: number = 0;
  @Input() description: string = '';

*/
  

  constructor() {}

}
