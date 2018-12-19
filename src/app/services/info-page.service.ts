import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: infoPage = {};
  loaded = false;
  team: any[] = [];

  constructor( private http: HttpClient) {
    this.loadData();
    this.loadTeam();
   }
   private loadData(){
    this.http.get('assets/data/data-page.json')
      .subscribe((resp: infoPage) => {

        this.loaded = true;
        this.info = resp;
      });
   }
   private loadTeam(){
    this.http.get('https://angular-portfolio-7287a.firebaseio.com/team.json')
          .subscribe( (resp: any[] ) => {
            this.loaded = false;
            this.team = resp;
            console.log(resp);
          });
   }
}
