import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LivreService} from "../../../Service/Livre/livre.service";
import {Livre} from "../../../Model/Livre/livre.model";

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit{

  livres: Array<Livre> = [] ;
  public keyword : string="";
  constructor(private router:Router,private livreService:LivreService) {
  }
  ngOnInit(): void {
    this.getLivres();
  }

  getLivres() {
    this.livreService.getLivres()
      .subscribe({
          next :  data => {
            console.log(data);
            this.livres = data;
          },
          error: err => {
            console.log(err);
          }
        }
      )
  }

  handelDelete(livre: Livre) {
    if(confirm("Etes vous sûre ?"))
      this.livreService.deleteLivre(livre).subscribe({
        next:value => {
          this.livres = this.livres.filter(l=>l.livreId! = livre.livreId);
          this.getLivres();
        },
        error: err => {
          console.log(err);
        }
      })
  }


  searchLivre() {
    this.livreService.searchLivre(this.keyword).subscribe({
      next:value => {
        console.log(value);
        this.livres=value;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  handelEdit(livre: Livre) {
    this.router.navigateByUrl(`/editLivre/${livre.livreId}`)
  }

  navigateToNewLivre() {
    this.router.navigate(['/newLivre']);
  }


}

