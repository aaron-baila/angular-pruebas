import { Component, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from './pokemon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  imports: [CommonModule, FormsModule],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent {
  pokemonList: Pokemon[] = []; // Lista de Pokémon encontrados
  searchTerm: string = '1'; // Término de búsqueda
  pokemonService: PokemonService;
  noResults: boolean = false; // Indica si no hay resultados

  constructor(pokemonService: PokemonService) {
    this.pokemonService = pokemonService;
  }
 ngOnInit(): void {
  this.searchPokemon();
  }

  // Método para realizar la búsqueda en la API
  async searchPokemon() {
    if (this.searchTerm.trim() !== '') {
      // Realizar la búsqueda en la API
      const results = await this.pokemonService.searchPokemon(this.searchTerm);

      if (results.length > 0) {
        this.pokemonList = results; // Asignar los resultados de la búsqueda
        this.noResults = false;
      } else {
        this.pokemonList = [];
        this.noResults = true; // Si no hay resultados, mostrar mensaje
      }
    } else {
      this.pokemonList = [];
      this.noResults = false; // Si no se ingresa nada, no mostrar resultados
    }
  }
}
