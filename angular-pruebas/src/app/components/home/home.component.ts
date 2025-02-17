import { Component, inject } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';
import { PokemonService } from '../pokemon.service';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [PokemonComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  pokemonList: Pokemon[] = []; // Todos los Pokémon obtenidos
  searchTerm: string = ''; // Término de búsqueda
  pokemonService: PokemonService = inject(PokemonService);
  noResults: boolean = false; // Flag para indicar si no hay resultados

  constructor() {
    // this.pokemonService
    //   .getAllPokemon()
    //   .then((pokemonList: Pokemon[]) => {
    //     this.pokemonList = pokemonList;
    //     // Inicializar con todos los Pokémon
    //   })
    //   .catch((error) => {
    //     console.error('Error al cargar los Pokémon:', error);
    //   });
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
