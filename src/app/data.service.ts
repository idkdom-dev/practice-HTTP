import { inject, Injectable, signal } from '@angular/core';
import { posts } from './post-data';
import { Post } from './post';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  http = inject(HttpClient);
  url = 'https://jsonplaceholder.typicode.com/posts';

  posts = signal<Post[]>([]);

  loadPosts() {
    this.http.get<Post[]>(this.url).subscribe((data) => this.posts.set(data));
  }

  getPostById(postId: number) {
    return this.posts().find((post) => post.id === postId);
  }

  // getPosts() {
  //   return this.http.get<Post[]>(this.url);
  // }

  // getPostById(postId: number): Observable<Post[]> {
  //   const params = new HttpParams().set('id', postId);
  //   return this.http.get<Post[]>(`${this.url}/${postId}`, { params });
  // }
}
