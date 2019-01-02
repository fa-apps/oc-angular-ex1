import { Post } from '../models/post.model';
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor(private httpClient: HttpClient) {

    this.getPostsFromServer();
  }


  emitPosts() {

    this.postsSubject.next(this.posts);
  }


  getPosts() {

    this.emitPosts();
  }


  deletePost(post: Post) {

    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePostsToServer();
    this.emitPosts();
  }

  createNewPost(newPost: Post) {

    this.posts.push(newPost);
    this.savePostsToServer();
    this.emitPosts();
  }

  updateLoveIts(post: Post, assert: boolean) {

    post.loveIts = assert ? post.loveIts + 1 : post.loveIts - 1;
    this.savePostsToServer();
    this.emitPosts();
  }

  savePostsToServer() {

    this.httpClient
      .put('https://http-client-demo-firebase.firebaseio.com/posts.json', this.posts)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getPostsFromServer() {

    this.httpClient
      .get<any[]>('https://http-client-demo-firebase.firebaseio.com/posts.json')
      .subscribe(
        (response) => {
          this.posts = response;
          console.log(this.posts);
          this.emitPosts();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

}