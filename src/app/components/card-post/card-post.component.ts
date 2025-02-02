import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
  standalone: false
})
export class CardPostComponent  implements OnInit {

  //Header, parte que va arriba
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
  @Input() likes: string = '';
  @Input() description: string = '';

  





  constructor() { }

  ngOnInit() {}

}
