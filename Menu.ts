import leia = require("readline-sync");
import { Produto } from "./src/model/Produto";
import { Eletronicos } from "./src/model/Eletronicos";
import { Acessorios } from "./src/model/Acessorios";
import { ProdutoController } from "./src/controller/ProdutoController";

export function main() {
    
    let produtos: ProdutoController = new ProdutoController();

    // Variáveis Auxiliares
    let opcao, numero, categoria, tipo, tipo1, tipo2: number;
    let nomeP: string;
    const categoriasProduto = ['Eletronicos', 'Acessorios'];
    const tipo1Produto = ['Smartphone', 'Smartwatch', 'Notebook'];
    const tipo2Produto = ['Carregador', 'Capinha'];

    console.log('\nCriar Produtos\n');

    let elet1: Eletronicos = new Eletronicos(produtos.gerarNumero(), 1, 1, 'Nokia');
    produtos.cadastrar(elet1);

    let elet2: Eletronicos = new Eletronicos(produtos.gerarNumero(), 1, 3, 'Samsung');
    produtos.cadastrar(elet2);

    let aces1: Acessorios = new Acessorios(produtos.gerarNumero(), 2, 1, 'Apple');
    produtos.cadastrar(aces1);

    while(true) {

        console.log('\n\n***********************************************');
        console.log('                                               ');
        console.log('               TECNOLOTUDO  LTDA               ');
        console.log('                                               ');
        console.log('***********************************************');
        console.log('                                               ');
        console.log('      1 - Novo Produto                         ');
        console.log('      2 - Listar todos os Produtos             ');
        console.log('      3 - Buscar Produto por Número            ');
        console.log('      4 - Atualizar Dados do Produto           ');
        console.log('      5 - Apagar Produto                       ');
        console.log('      6 - Sair                                 ');
        console.log('                                               ');
        console.log('***********************************************');

            console.log('Entre com a opção desejada: ');
            opcao = leia.questionInt('');

    if (opcao === 6){
        console.log('\n\nTecnolotudo LTDA - Sua lojinha dos eletrônicos!');
        Sobre();
        process.exit(0);
        }    

        switch (opcao) {
            case 1:
                console.log('\n\nNovo Produto');

                console.log('\nDigite 0 para Iniciar: ');
                numero = leia.questionInt('');

                console.log('\nDigite a categoria do Produto: ');
                tipo = leia.keyInSelect(categoriasProduto, '', {cancel: false}) + 1;

                console.log('\nDigite a Marca/Nome do Produto: ');
                nomeP = leia.question('');
                
                switch (tipo) {
                    case 1:
                        console.log('\nDigite o Tipo do Produto: ');
                        tipo1 = leia.keyInSelect(tipo1Produto, '', {cancel: false}) + 1;
                        produtos.cadastrar(
                            new Eletronicos(produtos.gerarNumero(), tipo, tipo1, nomeP));
                            break;
                            
                    case 2:
                        console.log('\nDigite o Tipo do Produto: ');
                        tipo2 = leia.keyInSelect(tipo2Produto, '', {cancel: false}) + 1;
                        produtos.cadastrar(
                            new Acessorios(produtos.gerarNumero(), tipo, tipo2, nomeP));
                            break;
                }
                break;

            case 2:
                console.log('\n\nListar todos os Produtos');

                produtos.listarTodas();
                break;

            case 3:
                console.log('\n\nBuscar Produto por Número');

                console.log('Digite o Número: ');
                numero = leia.questionInt('');
                produtos.procurarPorNumero(numero);
                
                break;

            case 4:
                console.log('\n\nAtualizar Dados do Produto');

                console.log('Digite o Número: ');
                let numeroProduto = leia.questionInt('');

                let produto = produtos.buscarNoArray(numeroProduto);

                if (produto !== null) {

                    console.log('\nDigite 0 para Iniciar: ');
                    leia.questionInt('');

                    let tipo = produto.categoria;

                    console.log('\nDigite a Marca/Nome do Produto: ');
                    let nomeP = leia.question('');

                    switch (tipo) {
                        case 1:
                            console.log('\nDigite o Tipo do Produto: ');
                            let tipo1 = leia.keyInSelect(tipo1Produto, '', { cancel: false }) + 1;
                            produtos.atualizar(new Eletronicos(numeroProduto, tipo, tipo1, nomeP));
                            break;

                        case 2:
                            console.log('\nDigite o Tipo do Produto: ');
                            let tipo2 = leia.keyInSelect(tipo2Produto, '', { cancel: false }) + 1;
                            produtos.atualizar(new Acessorios(numeroProduto, tipo, tipo2, nomeP));
                            break;
                    }
                } else {
                    console.log('\nO Produto de número ' + numeroProduto + ' não foi encontrado!');
                }

                break;

            case 5:
                    console.log('Digite o Número: ');
                    numero = leia.questionInt('');
                    produtos.deletar(numero);
                break;

            case 6:
                console.log('Sair');
                break;
        
            default:
                console.log('Opção Inválida!');
                break;
        }
    }
}

    export function Sobre(): void {
        console.log('\n***********************************************');
        console.log('Projeto Desenvolvido por: ');
        console.log('Generation Brasil - samarajeise@hotmail.com');
        console.log('github.com/SamsJd/e-commerce');
        console.log('***********************************************\n');
    }

    main();