import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import{ProdutoDetalheComponent} from '../produtos/produto-detalhe.component';

import {DoacaoProdutoModel} from './Produto';

import {DataService} from '../../app/services/data.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

private Doacoes:DoacaoProdutoModel[] =[];
private search:string;

  constructor(public navCtrl: NavController,private service:DataService) {
    this.Doacoes = this.service.getAll();
  }


  getItems = ()=> {
    console.log(this.search);
       let ret = this.service.filter(this.search);

       console.log(ret);
       this.Doacoes = ret; 
  };

  visualizarProduto = (produtoId:number) =>{
      this.navCtrl.push(ProdutoDetalheComponent,{produtoId:produtoId})
  };

}
