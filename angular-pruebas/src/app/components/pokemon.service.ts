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
      name: 'charmander',
    },{
      id: 7,
      image: `${this.baseUrl}/7.png`,
      name: 'squirtle',
    },
  ];
 
  getAllPokemon(): Observable<Pokemon[]> {
    return this.http.get(`${this.baseUrl}?limit=1000`).pipe(
      map((response: any) => {
        return response.results.map((pokemon: any) => {
          return {
            id: pokemon.url.split('/').filter((x) => x).pop(),
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').filter((x) => x).pop()}.png`,
          };
        });
      })
    );
  }

  getPokemonById(id:number): Pokemon | undefined {
    return this.pokemonList.find((pokemon) => pokemon.id === id);

  } 
}
