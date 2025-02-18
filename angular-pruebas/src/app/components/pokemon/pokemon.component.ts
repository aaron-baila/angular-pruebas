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
  searchTerm: string = ''; // Término de búsqueda inicial
  pokemon: Pokemon | null = null; // Pokémon encontrado, inicializado como null
  noResults: boolean = false; // Indica si no se encuentran resultados
  
  addNumber(num: number) {
    this.searchTerm += num; // Agrega el número al campo de búsqueda
    this.searchPokemon();
  }

  clearSearch() {
    this.searchTerm = ''; // Borra el campo de búsqueda
    this.searchPokemon();
  }

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.searchPokemon(); // Llamar al método de búsqueda cuando se inicializa el componente
  }

  // Método para realizar la búsqueda en la API
  async searchPokemon() {
    console.log("Buscando Pokémon con el término:", this.searchTerm);
    if (this.searchTerm.trim() !== '') {
      const results = await this.pokemonService.searchPokemon(this.searchTerm);
      
      if (results) {
        this.pokemon = results; // Si hay resultados, asignamos el Pokémon encontrado
        this.noResults = false; // No hay error de resultados
      } else {
        this.pokemon = null; // Si no se encuentra un Pokémon, asignamos null
        this.noResults = true; // Establecemos que no hubo resultados
      }
    } else {
      this.pokemon = null; // Si no hay término de búsqueda, no mostramos ningún Pokémon
      this.noResults = false; // No hay error, solo no hay búsqueda
    }
  }
}
