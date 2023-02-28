/* Agora o banco inventou de criar um novo tipo de poupança, chamada poupancaPremium, 
que contém uma taxa de juros melhor. Crie uma classe que herde atributos e métodos da classe poupanca 
criada anteriormente e modifique o método atualizaJuros (polimorfismo), aumentando o a taxa para 1.2% 
toda a vez que o método for chamado. */

import { ContaPoupanca } from "./contaPoupanca.js";

export class PoupancaPremium extends ContaPoupanca{

    constructor(atualizarJuros,setSaldo){
        super(atualizarJuros,setSaldo)
    }

    atualizarJuros(valor){
        super.setSaldo(valor * 1.012) 
      }
}