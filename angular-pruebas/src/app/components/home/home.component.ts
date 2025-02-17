import { Component } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-home',
  imports: [PokemonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  // readonly baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
  readonly baseUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

  pokemon: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    image: `${this.baseUrl}/1.png`,
  };
}
