import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListaDoacoes,DoacaoProdutoModel} from './Produto';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

private Doacoes:DoacaoProdutoModel[] = ListaDoacoes();
private search:string;

  constructor(public navCtrl: NavController) {

  }


  getItems = ()=>{
    console.log(this.search);
       let ret = ListaDoacoes().filter(item => item.nome.toLowerCase().indexOf(this.search.toLowerCase()) > -1);

       console.log(ret);
       this.Doacoes = ret; 
  };

}
