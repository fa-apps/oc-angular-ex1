import { Component, Input, OnInit } from '@angular/core';
import {Post} from "../models/post.model";
import {PostsService} from "../services/posts.service";

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post : Post;

  constructor( private postsService: PostsService) {}

  getPostColor() {

    if (this.post.loveIts > 0) {
      return "green"
    } else if (this.post.loveIts < 0) {
      return "red"
    }
  }

  onLoveIt(assert) {

    this.postsService.updateLoveIts(this.post, assert);
  }

  onDeletePost() {

    this.postsService.deletePost(this.post);
  }

  ngOnInit() {
  }

}
