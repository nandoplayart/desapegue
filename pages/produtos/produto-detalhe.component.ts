import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import {DoacaoProdutoModel} from '../home/Produto';
import {DataService} from '../../app/services/data.service';

@Component({
  selector: 'page-produto-detalhe',
  templateUrl: 'produto-detalhe.component.html'
})
export class ProdutoDetalheComponent {

private doacao:DoacaoProdutoModel;
private search:string;

  constructor(private navCtrl: NavController,private navParams:NavParams,private service:DataService) {
    let produtoId:number = this.navParams.get('produtoId');
    this.doacao = this.service.filterById(produtoId);
  }


 



}