import { Produto } from "./Produto";

export class Acessorios extends Produto {

    private _tipo2: number

    constructor(numero: number, categoria: number, tipo2: number, nomeP: string) {
        super(numero, categoria, nomeP)
        this._tipo2 = tipo2;
    }

        public get tipo2() {
        return this._tipo2;
    }

    public set tipo2(tipo2: number) {
        this._tipo2 = tipo2;
    }

    private modelo2(): string {

        switch (this._tipo2) {
        case 1:
            return 'Carregador';

        case 2:
            return 'Capinha';

        default:
            return 'Opção Inválida!';

        }
    }
    
    public override visualizar(): void {
        console.log('\n*****************************************************');
        console.log('Dados do Acessório:');
        console.log('*****************************************************\n');
        console.log('Número do Produto: ' + this.numero);
        console.log('Categoria do Produto: ' + this.categoria);
        console.log('Tipo de Acessório: ' + this.modelo2());
        console.log('Nome do Produto: ' + this.nomeP); 
    }

}