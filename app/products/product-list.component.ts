import { Component, OnInit } from '@angular/core';
import { IProduct } from "./products";
import {ProductService} from "./product.service";

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit{

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    listFilter: string;
    showImages: boolean = false;
    products: IProduct[];

    constructor(private _productService: ProductService){
    }

    toggleShowImage() : void {
        this.showImages = !this.showImages;
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}
