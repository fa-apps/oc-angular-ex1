import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Post } from "../models/post.model";
import { PostsService } from "../services/posts.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) {

  }

  ngOnInit() {

    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
