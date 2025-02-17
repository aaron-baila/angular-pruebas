import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}
  
  readonly baseUrl =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
  
    pokemonList: Pokemon[] = [
    {
      id: 1,
      image: `${this.baseUrl}/1.png`,
      name: 'bulbasaur',
    },
    {
      id: 4,
      image: `${this.baseUrl}/4.png`,
      name: 'squirtle',
    },{
      id: 7,
      image: `${this.baseUrl}/7.png`,
      name: 'charmander',
    },
  ];
 
  getAllPokemon(): Pokemon[]{
    return this.pokemonList;
  }

  getPokemonById(id:number): Pokemon | undefined {
    return this.pokemonList.find((pokemon) => pokemon.id === id);

  } 
}
