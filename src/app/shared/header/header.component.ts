import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public infoPageService: InfoPageService,
                private router: Router ) { }

  ngOnInit() {


  }

  searchItem(searchParam: string){
    // console.log(searchParam);
    if(searchParam.length < 1){
      return;
    }
      this.router.navigate(['/search', searchParam]);
  };  

}
