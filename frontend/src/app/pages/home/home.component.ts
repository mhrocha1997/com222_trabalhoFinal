import { Component, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  animate,
  style,
  state,
} from '@angular/animations';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AllGamesService } from 'src/app/services/all-games.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('0.5s ease-in-out')]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  constructor(private games: AllGamesService) {}

  ngOnInit(): void {
    this.getAll();
  }
  allGames: any;
  slides: any = [];

  getAll() {
    this.games.getAllProducts().subscribe((game: any[]) => {
      console.log(game);
      // console.log('todos', this.allGames);
      game?.map((i) => {
        // console.log(i.imageUrl);
        let item = {
          src: i.imageUrl,
          name: i.name,
          description: i.summary,
        };

        this.slides.push(item);

        console.log('Obj final', this.slides);
      });
    });
  }

  counter = 0;
  slideItems = [this.slides];
}
