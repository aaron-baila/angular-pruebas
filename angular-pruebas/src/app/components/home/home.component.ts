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
  pokemonList: Pokemon[] = [];    // Todos los Pokémon obtenidos
  filteredPokemonList: Pokemon[] = [];  // Pokémon filtrados según la búsqueda
  searchTerm: string = '';         // Término de búsqueda
  pokemonService: PokemonService = inject(PokemonService);

  constructor() {
    // Obtener los Pokémon al iniciar el componente
    this.pokemonService.getAllPokemon().then((pokemonList: Pokemon[]) => {
      this.pokemonList = pokemonList;
      this.filteredPokemonList = pokemonList;  // Inicializar con todos los Pokémon
    }).catch(error => {
      console.error('Error al cargar los Pokémon:', error);
    });
  }

  // Método para filtrar los Pokémon según el término de búsqueda
  filterPokemons() {
    if (this.searchTerm.trim() !== '') {
      // Filtrar por nombre o ID
      this.filteredPokemonList = this.pokemonList.filter(pokemon =>
        pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        pokemon.id.toString().includes(this.searchTerm)
      );
    } else {
      // Si la búsqueda está vacía, mostrar todos los Pokémon
      this.filteredPokemonList = this.pokemonList;
    }
  }
}
