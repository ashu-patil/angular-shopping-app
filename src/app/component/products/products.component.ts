import { CartService } from './../../service/cart.service';
import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  public productlist:any;
  public filterCategory : any;

  searchKey:string='';


  constructor(private api: ApiService , private cartService : CartService ) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productlist = res;
      this.filterCategory = res;

      this.productlist.forEach((a:any)=>{
        if(a.category === "women's clothing" || a.category === "men's clothing"){
          a.category = "fashion";
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
    })

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  addtocart(item : any){
    this.cartService.addtoCart(item);
  }

  filter(category:string){
    this.filterCategory = this.productlist.filter((a:any)=>{
      if(a.category == category || category ==''){
        return a;
      }
    })
  }
}
