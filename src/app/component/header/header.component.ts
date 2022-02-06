import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;

  public searchTerm: string = '';

  user$ = this.authService.currentUser$;

  constructor(
    private cartService : CartService,
    public authService: AuthenticationService,
    private router: Router,
    ) { }

  ngOnInit(): void {

    this.cartService.getProducts().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    // console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['']);
    });
  }

 
  
}
