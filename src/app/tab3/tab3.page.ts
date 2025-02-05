import { Component, QueryList, ViewChildren } from '@angular/core';
import { ReelsComponent } from '../components/reels/reels.component';
import { share } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  @ViewChildren(ReelsComponent) reelsComponents!: QueryList<ReelsComponent>;

  reels = [
    {
      username: 'juanperez',
      avatarUrl: 'https://i.pravatar.cc/150?img=17',
      videoUrl: 'https://videos.pexels.com/video-files/2022395/2022395-sd_640_360_30fps.mp4',
      music: 'Shakira - Hips Don’t Lie',
      likes: '3.4k',
      comments: '789',
      share: '45 mil',
      description: 'Bailando con estilo al ritmo de Shakira 💃🔥 #Dance #Latino',
  },
  {
      username: 'mariana_gmz',
      avatarUrl: 'https://i.pravatar.cc/150?img=25',
      videoUrl: 'https://videos.pexels.com/video-files/852360/852360-sd_640_360_30fps.mp4',
      music: 'The Weeknd - Blinding Lights',
      likes: '5.2k',
      comments: '1.1k',
      share: '100 mil',
      description: 'Cuando sales a dar una vuelta y terminas en un videoclip de The Weeknd ✨🚗 #BlindingLights #NightVibes',
  },
  {
      username: 'sofia_rmz',
      avatarUrl: 'https://i.pravatar.cc/150?img=30',
      videoUrl: 'https://videos.pexels.com/video-files/854923/854923-sd_640_360_25fps.mp4',
      music: 'Ed Sheeran - Shape of You',
      likes: '4.8k',
      comments: '670',
      share: '75 mil',
      description: 'Día de gym 💪🏽🔥 ¡A seguir dándolo todo! #Fitness #Motivation',
  },
  {
      username: 'carlosmtz',
      avatarUrl: 'https://i.pravatar.cc/150?img=12',
      videoUrl: 'https://videos.pexels.com/video-files/2531140/2531140-sd_640_360_24fps.mp4',
      music: 'Post Malone - Circles',
      likes: '2.9k',
      comments: '432',
      share: '30 mil',
      description: 'Un paseo por la ciudad nunca está de más 🚶‍♂️✨ #CityWalk #Relax',
  },
  {
      username: 'lucia_99',
      avatarUrl: 'https://i.pravatar.cc/150?img=45',
      videoUrl: 'https://videos.pexels.com/video-files/1722591/1722591-sd_640_360_30fps.mp4',
      music: 'Harry Styles - As It Was',
      likes: '6.3k',
      comments: '980',
      share: '150 mil',
      description: 'Momentos de tranquilidad en la naturaleza 🍃✨ #Peaceful #NatureLover',
  },
  {
      username: 'daniel_m',
      avatarUrl: 'https://i.pravatar.cc/150?img=33',
      videoUrl: 'https://videos.pexels.com/video-files/4185375/4185375-sd_506_960_24fps.mp4',
      music: 'Billie Eilish - Bad Guy',
      likes: '3.8k',
      comments: '600',
      share: '65 mil',
      description: 'Caminando como un villano en la calle 😎 #BadGuy #StreetStyle',
  },
  {
      username: 'fercho_21',
      avatarUrl: 'https://i.pravatar.cc/150?img=22',
      videoUrl: 'https://videos.pexels.com/video-files/3403453/3403453-uhd_1440_2732_25fps.mp4',
      music: 'Eminem - Lose Yourself',
      likes: '7.1k',
      comments: '1.3k',
      share: '200 mil',
      description: 'Listo para darlo todo en el escenario 🔥🎤 #RapLife #DreamBig',
  },
  {
      username: 'valentina_lopez',
      avatarUrl: 'https://i.pravatar.cc/150?img=18',
      videoUrl: 'https://videos.pexels.com/video-files/4124198/4124198-sd_640_360_24fps.mp4',
      music: 'Ariana Grande - Into You',
      likes: '4.5k',
      comments: '789',
      share: '90 mil',
      description: 'Cuando te pierdes en la música y olvidas el mundo 🎶💕 #FeelTheMusic',
  },
  {
      username: 'andres_gonzalez',
      avatarUrl: 'https://i.pravatar.cc/150?img=20',
      videoUrl: 'https://videos.pexels.com/video-files/4038571/4038571-sd_506_960_25fps.mp4',
      music: 'Imagine Dragons - Thunder',
      likes: '5.6k',
      comments: '920',
      share: '110 mil',
      description: 'Pura energía recorriendo la ciudad! ⚡🚴‍♂️ #Thunder #CityAdventure',
  },
  {
      username: 'isabella_24',
      avatarUrl: 'https://i.pravatar.cc/150?img=27',
      videoUrl: 'https://videos.pexels.com/video-files/3468587/3468587-uhd_1440_2560_30fps.mp4',
      music: 'Coldplay - Yellow',
      likes: '3.3k',
      comments: '610',
      share: '80 mil',
      description: 'Los mejores momentos siempre son los más simples 🌟🌻 #Yellow #ChillVibes',
  },
  {
    username: 'mateo_hernandez',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    videoUrl: 'https://videos.pexels.com/video-files/853848/853848-sd_640_360_25fps.mp4',
    music: 'Drake - God’s Plan',
    likes: '8.2k',
    comments: '1.5k',
    share: '250 mil',
    description: 'A veces la vida tiene su propio plan ✨🙏 #GodsPlan #Blessed',
},
{
    username: 'camila_reyes',
    avatarUrl: 'https://i.pravatar.cc/150?img=9',
    videoUrl: 'https://videos.pexels.com/video-files/2657691/2657691-sd_640_360_30fps.mp4',
    music: 'Rihanna - Diamonds',
    likes: '6.7k',
    comments: '1.1k',
    share: '140 mil',
    description: 'Brilla como un diamante 💎✨ #ShineBright #LuxuryLife',
},
{
    username: 'sebastian_12',
    avatarUrl: 'https://i.pravatar.cc/150?img=35',
    videoUrl: 'https://videos.pexels.com/video-files/3134591/3134591-sd_640_360_24fps.mp4',
    music: 'Avicii - Wake Me Up',
    likes: '4.9k',
    comments: '800',
    share: '95 mil',
    description: 'El amanecer tiene su propia magia 🌅🎶 #WakeMeUp #NewDay',
},
{
    username: 'alejandra.vz',
    avatarUrl: 'https://i.pravatar.cc/150?img=41',
    videoUrl: 'https://videos.pexels.com/video-files/855432/855432-sd_640_360_25fps.mp4',
    music: 'Shawn Mendes - There’s Nothing Holdin’ Me Back',
    likes: '5.3k',
    comments: '920',
    share: '120 mil',
    description: 'Sin miedo a nada, solo a vivir el momento ✨🔥 #NoLimits #WildHeart',
},
{
    username: 'marcos.lopez',
    avatarUrl: 'https://i.pravatar.cc/150?img=50',
    videoUrl: 'https://videos.pexels.com/video-files/3571264/3571264-sd_640_360_30fps.mp4',
    music: 'Daft Punk - Get Lucky',
    likes: '7.8k',
    comments: '1.2k',
    share: '180 mil',
    description: 'De fiesta hasta el amanecer 🌙🎉 #GetLucky #PartyVibes',
},
{
    username: 'valeria_08',
    avatarUrl: 'https://i.pravatar.cc/150?img=15',
    videoUrl: 'https://videos.pexels.com/video-files/6394054/6394054-sd_960_480_24fps.mp4',
    music: 'Dua Lipa - Levitating',
    likes: '6.1k',
    comments: '1.0k',
    share: '160 mil',
    description: 'Subiendo hasta las estrellas 🚀✨ #Levitating #CosmicEnergy',
},
{
    username: 'rafa_99',
    avatarUrl: 'https://i.pravatar.cc/150?img=60',
    videoUrl: 'https://videos.pexels.com/video-files/6981411/6981411-sd_640_360_25fps.mp4',
    music: 'Linkin Park - In The End',
    likes: '9.0k',
    comments: '1.7k',
    share: '300 mil',
    description: 'Al final, lo que importa es el camino 🎤🔥 #RockVibes #Classic',
},
{
    username: 'antonella_fdz',
    avatarUrl: 'https://i.pravatar.cc/150?img=23',
    videoUrl: 'https://videos.pexels.com/video-files/5896379/5896379-sd_360_640_24fps.mp4',
    music: 'BTS - Dynamite',
    likes: '10.5k',
    comments: '2.2k',
    share: '400 mil',
    description: 'Brillando como el dinamita 💥✨ #Dynamite #KpopLove',
},
{
    username: 'pedro.alvarez',
    avatarUrl: 'https://i.pravatar.cc/150?img=19',
    videoUrl: 'https://videos.pexels.com/video-files/8928582/8928582-sd_640_360_25fps.mp4',
    music: 'Michael Jackson - Billie Jean',
    likes: '11.3k',
    comments: '2.5k',
    share: '500 mil',
    description: 'El rey del pop sigue vivo en nosotros 🎶🕺 #BillieJean #MJForever',
},
{
    username: 'sofii_gz',
    avatarUrl: 'https://i.pravatar.cc/150?img=7',
    videoUrl: 'https://videos.pexels.com/video-files/8856785/8856785-sd_360_640_25fps.mp4',
    music: 'Taylor Swift - Shake It Off',
    likes: '8.7k',
    comments: '1.9k',
    share: '220 mil',
    description: 'Sacudiendo las preocupaciones ✨🎤 #ShakeItOff #PositiveVibes',
},
{
  username: 'david_espinoza',
  avatarUrl: 'https://i.pravatar.cc/150?img=14',
  videoUrl: 'https://videos.pexels.com/video-files/5147455/5147455-sd_360_640_30fps.mp4',
  music: 'Marshmello - Alone',
  likes: '6.2k',
  comments: '1.1k',
  share: '170 mil',
  description: 'A veces estar solo es lo mejor 🔥🎧 #ElectronicVibes #Marshmello',
},
{
  username: 'martina_s',
  avatarUrl: 'https://i.pravatar.cc/150?img=11',
  videoUrl: 'https://videos.pexels.com/video-files/8859849/8859849-sd_360_640_25fps.mp4',
  music: 'Lady Gaga - Poker Face',
  likes: '9.4k',
  comments: '2.0k',
  share: '350 mil',
  description: 'Jugando mis cartas con estilo ♠️✨ #PokerFace #QueenGaga',
},
{
  username: 'leo_morales',
  avatarUrl: 'https://i.pravatar.cc/150?img=32',
  videoUrl: 'https://videos.pexels.com/video-files/4937376/4937376-sd_360_640_24fps.mp4',
  music: 'Queen - Don’t Stop Me Now',
  likes: '7.6k',
  comments: '1.4k',
  share: '200 mil',
  description: 'Imparable como siempre! 🚀🔥 #DontStopMeNow #ClassicRock',
},
{
  username: 'liliana_gb',
  avatarUrl: 'https://i.pravatar.cc/150?img=26',
  videoUrl: 'https://videos.pexels.com/video-files/854695/854695-sd_640_360_30fps.mp4',
  music: 'Adele - Rolling in the Deep',
  likes: '5.8k',
  comments: '980',
  share: '150 mil',
  description: 'Las emociones más profundas en cada nota 🎤💔 #RollingInTheDeep',
},
{
  username: 'nico_hdz',
  avatarUrl: 'https://i.pravatar.cc/150?img=38',
  videoUrl: 'https://videos.pexels.com/video-files/8538236/8538236-sd_360_628_30fps.mp4',
  music: 'Travis Scott - Sicko Mode',
  likes: '12.1k',
  comments: '3.0k',
  share: '600 mil',
  description: 'Modo insano activado 🔥😈 #SickoMode #Hype',
},
{
  username: 'paola_97',
  avatarUrl: 'https://i.pravatar.cc/150?img=48',
  videoUrl: 'https://videos.pexels.com/video-files/1528489/1528489-sd_640_360_25fps.mp4',
  music: 'Bruno Mars - 24K Magic',
  likes: '10.7k',
  comments: '2.6k',
  share: '500 mil',
  description: 'Brillando con todo el estilo ✨💎 #24KMagic #LuxuryLife',
},
{
  username: 'eduardo_gz',
  avatarUrl: 'https://i.pravatar.cc/150?img=44',
  videoUrl: 'https://videos.pexels.com/video-files/3040808/3040808-sd_640_360_30fps.mp4',
  music: 'Justin Bieber - Peaches',
  likes: '8.5k',
  comments: '1.8k',
  share: '300 mil',
  description: 'Viviendo el verano con el mejor ritmo 🍑☀️ #Peaches #GoodVibes',
},
    {
      username: 'kevints.1',
      avatarUrl: 'https://images7.memedroid.com/images/UPLOADED627/627a677e6e34c.jpeg',
      videoUrl: 'https://videos.pexels.com/video-files/3015527/3015527-hd_1920_1080_24fps.mp4',
      music: 'Música de fondo',
      likes: '1.2k',
      comments: '345',
      share: '123,1 mil',
      description: 'Este es un reel de ejemplo.',
    },
    {
      username: 'usuario2',
      avatarUrl: 'https://via.placeholder.com/150',
      videoUrl: 'https://videos.pexels.com/video-files/2709902/2709902-sd_640_360_25fps.mp4',
      music: 'Otra música',
      likes: '2.5k',
      comments: '500',
      share: '20 mil',
      description: 'Otro reel de ejemplo.',
    },
    {
      username: 'usuario2',
      avatarUrl: 'https://via.placeholder.com/150',
      videoUrl: 'https://videos.pexels.com/video-files/5975407/5975407-sd_360_640_30fps.mp4',
      music: 'Otra música',
      likes: '2.5k',
      comments: '500',
      share: '20 mil',
      description: 'Otro reel de ejemplo.',
    },
  ];

  currentIndex = 0;

  constructor() {}

  ionViewDidEnter() {
    // Pausa todos los videos cuando el usuario entre a tab3
    this.pauseAllVideos();
  }

  ionViewWillLeave() {
    // Pausa todos los videos cuando el usuario abandone el tab3
    this.pauseAllVideos();
  }

  pauseAllVideos() {
    if (this.reelsComponents) {
      this.reelsComponents.forEach((reel) => {
        reel.hide(); // Pausa y silencia el video
      });
    }
  }

  onSwipe(event: any) {
    if (event.deltaY > 0) {
      this.showNextReel();
    } else if (event.deltaY < 0) {
      this.showPreviousReel();
    }
  }

  showNextReel() {
    if (this.currentIndex < this.reels.length - 1) {
      this.currentIndex++;
      this.scrollToReel(this.currentIndex);
    }
  }

  showPreviousReel() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scrollToReel(this.currentIndex);
    }
  }

  scrollToReel(index: number) {
    const reelsArray = this.reelsComponents.toArray();
    reelsArray.forEach((reel, i) => {
      if (i === index) {
        reel.show(); // Muestra y reproduce el video actual
      } else {
        reel.hide(); // Oculta y pausa los demás videos
      }
    });
  }
}