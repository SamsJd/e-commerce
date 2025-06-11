import { Produto } from "./Produto";

export class Eletronicos extends Produto {

    private _tipo1: number

    constructor(numero: number, categoria: number, tipo1: number, nomeP: string) {
        super(numero, categoria, nomeP)
        this._tipo1 = tipo1;
    }

        public get tipo1() {
        return this._tipo1;
    }

    public set tipo1(tipo1: number) {
        this._tipo1 = tipo1;
    }

    private modelo1(): string {

        switch (this._tipo1) {
        case 1:
            return 'Smartphone';

        case 2:
            return 'Smartwatch';

        case 3:
            return 'Notebook';

        default:
            return 'Opção Inválida!';

        }
    }

    public override visualizar(): void {
        console.log('\n***********************************************');
        console.log('Dados do Acessório:');
        console.log('***********************************************\n');
        console.log('Número do Produto: ' + this.numero);
        console.log('Categoria do Produto: ' + this.categoria);
        console.log('Tipo do Eletrônico: ' + this.modelo1());
        console.log('Nome do Produto: ' + this.nomeP); 
    }

}