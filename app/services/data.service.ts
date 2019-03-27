import {DoacaoProdutoModel} from '../../pages/home/produto';

export class DataService{


private _listaDoacoes :DoacaoProdutoModel[];

  constructor(){
    let prod = new DoacaoProdutoModel();
    prod.nome = "Televisão preta e branca";
    prod.descricao = "tenho uma televisão preta e branca para doação."; 
    prod.dataPublicacao = new Date();
    prod.doador = "Luiz";
    prod.url = "https://i.pinimg.com/originals/85/e5/56/85e556c02936691fac6f9f7f1a2f91d5.jpg";
    prod.doadorUrlFoto ="https://pixel.nymag.com/imgs/daily/vulture/2019/02/27/27-michael-jackson.w1200.h1200.jpg";
    this._listaDoacoes.push(prod);

    prod = new DoacaoProdutoModel();
    prod.nome = "Patins";
    prod.descricao = "tenho uma patins em ótimo estado doação."; 
    prod.dataPublicacao = new Date();
    prod.doador = "Luiz";
    prod.url = "https://imgcentauro-a.akamaihd.net/900x900/8603163L/patins-4-rodas-oxer-secret-retro-quad-adulto-img.jpg";
    prod.doadorUrlFoto ="https://pixel.nymag.com/imgs/daily/vulture/2019/02/27/27-michael-jackson.w1200.h1200.jpg";
    this._listaDoacoes.push(prod);
  }

  filter = function(info:string): DoacaoProdutoModel[]{

    return this._listaDoacoes
    .filter(item => item.nome.toLowerCase().indexOf(info.toLowerCase().indexOf() > -1));
  }

}
