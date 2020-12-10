import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AllGamesService } from '../services/all-games.service';
/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private games: AllGamesService) {}
  myControl = new FormControl();
  options: any = [];
  filteredOptions: any = [];
  word: string;
  allWords: any = [];

  ngOnInit() {
    this.search();
  }

  search() {
    let plataform = window.location.href.split('games/');
    this.games.search(plataform[1]).subscribe((games: any) => {
      this.options = games;
    });
  }

  filter(event: any) {
    this.options.map((i) => {
      let myVariable = event.target.value.toUpperCase();
      let myReg = new RegExp(myVariable + '.*');
      let myMatch = i.match(myReg);
      // console.log('palavra', myMatch, i);

      if (myMatch) {
        this.filteredOptions.push(myMatch);
      }
    });
  }

  getAutoComplete(event: any) {
    this.search = event;
    console.log('AQUIII', event);
  }

  async autoComplete() {
    console.log(this.search);
    let plataform = window.location.href.split('games/');
    await this.games
      .searchAutoComplete(plataform[1], this.search)
      .subscribe((games: any) => {
        console.log('AQUIIIIIIIIIIIII', games);
      });
  }
}
