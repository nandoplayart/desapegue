import {Injectable } from '@angular/core';

import {DoacaoProdutoModel} from '../../pages/home/Produto';

@Injectable()
export class DataService{


private _listaDoacoes :DoacaoProdutoModel[] =[];

  constructor(){
    let prod = new DoacaoProdutoModel();
    prod.produtoId = 1;
    prod.nome = "Televisão preta e branca";
    prod.descricao = "tenho uma televisão preta e branca para doação."; 
    prod.dataPublicacao = new Date();
    prod.doador = "Luiz";
    prod.url[0] = "https://i.pinimg.com/originals/85/e5/56/85e556c02936691fac6f9f7f1a2f91d5.jpg";
    prod.doadorUrlFoto ="https://pixel.nymag.com/imgs/daily/vulture/2019/02/27/27-michael-jackson.w1200.h1200.jpg";
    this._listaDoacoes.push(prod);

    prod = new DoacaoProdutoModel();
    prod.produtoId = 2;
    prod.nome = "Patins";
    prod.descricao = "tenho uma patins em ótimo estado doação."; 
    prod.dataPublicacao = new Date();
    prod.doador = "Luiz";
    prod.url[0] = "https://imgcentauro-a.akamaihd.net/500x500/8884773L/patins-oxer-darkness-gold-in-line-freestyle-abec-7-base-de-aluminio-adulto-img.jpg";
    prod.url[1] = "https://imgcentauro-a.akamaihd.net/900x900/8884773LA2/patins-oxer-darkness-gold-in-line-freestyle-abec-7-base-de-aluminio-adulto-img.jpg";
    prod.url[2] =  
"https://imgcentauro-a.akamaihd.net/900x900/8884773LA3/patins-oxer-darkness-gold-in-line-freestyle-abec-7-base-de-aluminio-adulto-img.jpg";

    prod.doadorUrlFoto ="https://pixel.nymag.com/imgs/daily/vulture/2019/02/27/27-michael-jackson.w1200.h1200.jpg";

    
    this._listaDoacoes.push(prod);
  }

  filter = function(info:string): DoacaoProdutoModel[]{

    return this._listaDoacoes
    .filter(item => item.nome.toLowerCase().indexOf(info.toLowerCase()) > -1);
  }

  filterById(id:number):DoacaoProdutoModel{
    return this._listaDoacoes.filter(i=> i.produtoId == id)[0];
  }

  getAll = ()=>{
    return this._listaDoacoes;
  }

}
