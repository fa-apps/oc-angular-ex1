import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle:string;
  @Input() postContent:string;
  @Input() postDate: Date;
  @Input() postLoveIts:number;

  getPostColor() {
    if (this.postLoveIts > 0) {
      return "green"
    } else if (this.postLoveIts < 0) {
      return "red"
    }
  }

  onLoveIt(assert) {

    this.postLoveIts = assert ? this.postLoveIts + 1 : this.postLoveIts - 1;

    return true

  }

  constructor() {

    this.postLoveIts = 0;

  }

  ngOnInit() {
  }

}
