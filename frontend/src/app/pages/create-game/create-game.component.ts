import { Component, OnInit } from '@angular/core';
import { AllGamesService } from 'src/app/services/all-games.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css'],
})
export class CreateGameComponent implements OnInit {
  constructor(private games: AllGamesService) {}

  name: string;
  developer: string;
  console: string;
  genre: string;
  summary: string;
  imageURL: string;
  ngOnInit(): void {}

  getName(event: any) {
    this.name = event.target.value;
  }

  getDeveloper(event: any) {
    this.developer = event.target.value;
  }

  getConsole(event: any) {
    this.console = event;
    console.log(this.console);
  }

  getSummary(event: any) {
    this.summary = event.target.value;
    console.log(this.summary);
  }
  getImage(event: any) {
    this.imageURL = event.target.value;
  }

  onCheckGenre(event: any) {
    console.log(event);
    this.genre = event;
  }

  async createGame() {
    let token = await localStorage.getItem('token');

    if (
      !this.name ||
      !this.summary ||
      !this.developer ||
      !this.genre ||
      !this.imageURL ||
      !this.console
    ) {
      alert(
        'Ops! Para cadastrar um jogo é necessário informar todos os campos!'
      );
      return;
    }

    let data = {
      name: this.name,
      summary: this.summary,
      developer: this.developer,
      imageUrl: this.imageURL,
      genre: this.genre,
      console: this.console,
    };

    this.games.createGame(token, data).subscribe((game: any) => {
      console.log(game);
    });
  }
}
