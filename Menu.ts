import leia = require("readline-sync");
import { Produto } from "./src/model/Produto";
import { Eletronicos } from "./src/model/Eletronicos";
import { Acessorios } from "./src/model/Acessorios";

export function main() {
    
    let opcao: number

    const eletronicos: Eletronicos = new Eletronicos (2, 1, 2, 'Samsung Galaxy S25');
    eletronicos.visualizar();

    const acessorios: Acessorios = new Acessorios (3, 2, 3, 'Samsung Galaxy S25');
    acessorios.visualizar();

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
        // console.log('      6 - Sacar                                ');
        // console.log('      7 - Depositar                            ');
        // console.log('      8 - Transferir Valores entre Contas      ');
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
                console.log('Novo Produto');
                break;

            case 2:
                console.log('Listar todos os Produtos');
                break;

            case 3:
                console.log('Buscar Produto por Número');
                break;

            case 4:
                console.log('Atualizar Dados do Produto');
                break;

            case 5:
                console.log('Apagar Produto');
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