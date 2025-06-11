export abstract class Produto {

    private _numero: number;
    private _categoria: number;
    private _nomeP: string;

    constructor(numero: number, categoria: number, nomeP: string) {
        this._numero = numero;
        this._categoria = categoria;
        this._nomeP = nomeP;
    }

    public get numero() {
        return this._numero;
    }

    public set numero(numero: number) {
        this._numero = numero;
    }

    public get categoria() {
        return this._categoria;
    }

    public set categoria(categoria: number) {
        this._categoria = categoria;
    }

    public get nomeP() {
        return this._nomeP;
    }

    public set nomeP(nomeP: string) {
        this._nomeP = nomeP;
    }

    public visualizar(): void {

        let categoria: string = '';

        switch(this._categoria) {
            case 1:
                categoria = 'Eletrônicos'
                break;
            case 2:
                categoria = 'Acessórios'
                break;
        }
    
        console.log('\n***********************************************');
        console.log('Dados do Produto:');
        console.log('***********************************************\n');
        console.log('Número do Produto: ' + this._numero);
        console.log('Categoria do Produto: ' + this.categoria);
        console.log('Nome do Produto: ' + this.nomeP); 
    }
}