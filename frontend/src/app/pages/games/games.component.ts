import { Component, OnInit } from '@angular/core';
import { AllGamesService } from 'src/app/services/all-games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  constructor(private games: AllGamesService) {}

  ngOnInit(): void {
    this.getTopGames();
  }
  platform: string;
  topGames = [];
  word: string;
  getTopGames() {
    console.log(window.location.href);
    let plataform = window.location.href.split('games/');
    // console.log(plataform[1]);

    this.games.getGamesInConsole(plataform[1]).subscribe((games: any) => {
      console.log(games);
      this.platform = games[0]?.console;
      games.map((i) => {
        this.topGames.push(i);
      });
    });
  }

  
}
