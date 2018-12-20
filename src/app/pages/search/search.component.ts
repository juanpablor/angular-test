import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute,
                public productsService :ProductsService) { }

  ngOnInit() {

    this.route.params
      .subscribe(params => {
        console.log(params['searchParam']);
        this.productsService.searchItems( params['searchParam'] );
      });
  }

}
