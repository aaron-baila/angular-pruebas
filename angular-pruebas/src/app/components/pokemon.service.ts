import { Pokemon } from "./pokemon/pokemon";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  url = 'https://pokeapi.co/api/v2/pokemon';

  // Método para obtener todos los Pokémon
  async getAllPokemon(): Promise<Pokemon[]> {
    try {
      const response = await fetch(this.url);
      const data = await response.json();
      
      if (data.results) {
        const pokemonList = await Promise.all(
          data.results.map(async (pokemon: { name: string; url: string }) => {
            const pokemonDetails = await this.getPokemonDetails(pokemon.url);
            return {
              name: pokemon.name,
              id: pokemonDetails.id,
              image: pokemonDetails.sprites.front_default, // Obtén la imagen del Pokémon
            };
          })
        );
        return pokemonList;
      } else {
        throw new Error('No se encontraron resultados.');
      }
    } catch (error) {
      console.error('Error al obtener los Pokémon:', error);
      throw error;
    }
  }

  // Método para obtener los detalles adicionales de un Pokémon
  async getPokemonDetails(url: string): Promise<any> {
    const response = await fetch(url);
    return await response.json();
  }

  // Método para buscar un Pokémon por nombre o id
  async searchPokemon(searchTerm: string): Promise<any[]> {
    const searchUrl = `${this.url}/${searchTerm.toLowerCase()}`;  // Construir URL para buscar por nombre o id
    try {
      const response = await fetch(searchUrl);
      if (response.ok) {
        const data = await response.json();
        return [{
          name: data.name,
          id: data.id,
          image: data.sprites.front_default,
        }];
      } else {
        return [];  // Si no se encuentra ningún Pokémon
      }
    } catch (error) {
      console.error('Error al buscar el Pokémon:', error);
      return [];
    }
  }
}
