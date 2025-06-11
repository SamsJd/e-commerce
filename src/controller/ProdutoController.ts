import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {

    private listaProduto: Array<Produto> = new Array<Produto>();
    numero: number = 0

    procurarPorNumero(numero: number): void {
        let buscaProduto = this.buscarNoArray(numero);

        if (buscaProduto !== null) {
            buscaProduto.visualizar();
        } else {
            console.log('\nO Produto de número .' + numero + '. não foi encontrado!');
        }
    }

    listarTodas(): void {
        for(let produto of this.listaProduto) {
            produto.visualizar();
        };
    }

    cadastrar(produto: Produto): void {
        this.listaProduto.push(produto);
        console.log('\nO Produto de número .' + produto.numero + '. foi criado com sucesso!');
    }

    atualizar(produto: Produto): void {

    let index = this.listaProduto.findIndex(p => p.numero === produto.numero);

    if (index !== -1) {
        this.listaProduto[index] = produto;
        console.log('\nO Produto de número ' + produto.numero + ' foi atualizado com sucesso!');
    } else {
        console.log('\nO Produto de número ' + produto.numero + ' não foi encontrado!');
    }
}

    deletar(numero: number): void {
        let buscaProduto =  this.buscarNoArray(numero);

        if (buscaProduto !== null) {
            this.listaProduto.splice(this.listaProduto.indexOf(buscaProduto), 1);
            console.log('\nO Produto de número .' + numero + '. foi apagado com sucesso!');
        } else {
            console.log('\nO Produto de número .' + numero + '. não foi encontrado!');
        }
    }

    public gerarNumero(): number {
        return ++ this.numero;
    }

    public buscarNoArray(numero: number): Produto | null {

        for(let produto of this.listaProduto) {
            if(produto.numero === numero)
                return produto;
        }
        return null
    }
}