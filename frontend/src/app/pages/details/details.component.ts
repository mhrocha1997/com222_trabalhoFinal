import { Component, OnInit } from '@angular/core';
import { AllGamesService } from 'src/app/services/all-games.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(private games: AllGamesService) {}

  ngOnInit(): void {
    this.showInputByAvaliable();
    this.getReview();
  }
  name: string;
  image: string;
  description: string;
  rate: number;

  rateGame: number;
  email: string;
  avaliable: string;

  allReviews = [];
  enable: Boolean = false;

  async showInputByAvaliable() {
    let token = await localStorage.getItem('token');
    if (token) {
      this.enable = true;
    } else {
      this.enable = false;
    }
  }

  getReview() {
    console.log(window.location.href);
    let plataform = window.location.href.split('details/');
    // console.log(plataform[1]);

    this.games.getReviews(plataform[1]).subscribe((games: any) => {
      console.log(games[1]);
      this.name = games[0].name;
      this.image = games[0].imageUrl;
      this.rate = games[0].rate;
      this.description = games[0].summary;
      // console.log(this.name, this.image, this.rate, this.description);
      games[1].map((i) => {
        this.allReviews.push(i);
      });
    });
  }

  getRate(event: any) {
    this.rateGame = event.target.value;
  }

  getEmail(event: any) {
    this.email = event.target.value;
  }

  getAvaliable(event: any) {
    console.log(event.target.value);
    this.avaliable = event.target.value;
  }

  async createReview() {
    let token = await localStorage.getItem('token');
    let email = await localStorage.getItem('user');
    let avaliable = {
      rate: Number(this.rateGame),
      name: this.name,
      email,
      text: this.avaliable,
    };
    this.games.createReview(token, avaliable).subscribe((review: any) => {
      // console.log(review);
      if (review) {
        this.allReviews = [];
        alert(review.message);
        // document.getElementsById('text').value = '';
        // document.getElementById('number').value = '';
        window.location.reload()
        // this.getReview();
      }
    });
  }
}
