import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BattleComponent } from './battle/battle.component';
import { MoveComponent } from './move/move.component';
import { LogColorDirective } from './battle/log-color.directive';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { BattleArenaComponent } from './battle-arena/battle-arena.component';
import { HpBarComponent } from './hp-bar/hp-bar.component';
import {PokemonService} from "./pokemon/pokemon.service";
import {BattleService} from "./battle/battle.service";

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    BattleComponent,
    MoveComponent,
    LogColorDirective,
    PokemonInfoComponent,
    BattleArenaComponent,
    HpBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PokemonService,
    BattleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }