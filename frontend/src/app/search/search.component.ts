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
  options: any[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  word: string;

  // search() {
  //   console.log(window.location.href);
  //   let plataform = window.location.href.split('games/');

  //   this.games.search(plataform[1]).subscribe((games: any) => {
  //     console.log(games);
  //     this.options.push(games);
  //   });
  // }
  ngOnInit() {
  }
}
