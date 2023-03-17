import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  constructor(private http: HttpClient) { }
  sendVoting(vote: any) {
    return this.http.post('http://localhost:3000/api/vote', vote);
  }

}

