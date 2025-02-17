import { Component, inject } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { PokemonService } from '../pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [PokemonComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  
pokemonList:Pokemon [] = [];

pokemonService:PokemonService = inject(PokemonService);

constructor(){
  this.pokemonList = this.pokemonService.getAllPokemon();
}
}
