import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { ProductDetailInter } from '../../interfaces/details.interfaces';


@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  detail: ProductDetailInter;
  idProduct: string;

  constructor( private route: ActivatedRoute,
                public productsService: ProductsService) { }

  ngOnInit() {


    this.route.params
        .subscribe(parameters => {

          this.productsService.loadDetails(parameters['id'])
            .subscribe((detail: ProductDetailInter) => {
              this.idProduct = parameters['id'];
              this.detail = detail;
            });

        });
  }

}
