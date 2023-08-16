import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Component/home/home.component";
import {ExposantComponent} from "./Component/Exposant/exposant/exposant.component";
import {LivreComponent} from "./Component/Livre/livre/livre.component";
import {EditExposantComponent} from "./Component/Exposant/edit-exposant/edit-exposant.component";
import {EditLivreComponent} from "./Component/Livre/edit-livre/edit-livre.component";
import {MapComponent} from "./Component/map/map.component";

const routes: Routes = [
  {path:"home",component : HomeComponent},
  {path:"map",component : MapComponent},
  {path:"",component : HomeComponent},
  {path:"exposants",component : ExposantComponent},
  {path:"editExposant/:exposantId",component : EditExposantComponent},

  {path:"livres",component : LivreComponent},
  {path:"editLivre/:livreId",component : EditLivreComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
