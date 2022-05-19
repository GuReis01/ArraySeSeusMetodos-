

function executar1() {
    var array = [];

    for (let i = 0; i < 20; i++) {
        var num = prompt("Escreva um numero");
        array.push(num + " ");
    }

    alert("Os numeros foram: " + array);

}


/*2.Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.*/

function exercicio2() {
    var arrayMais = [];
    var arrayMenos = [];


    for (let i = 0; i < 12; i++) {
        var num = prompt("Digite um numero: ");

        if (num > 50) {
            arrayMais.push(num);
        } else {
            arrayMenos.push(num);
        }
    }

    alert("Numeros acima de 50: " + arrayMais + ", numeros abaixo de 50: " + arrayMenos);

}


/*3.Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.*/

function exercicio3() {
    var drofo = ["anel invisibilidade", "botas magicas", "botas magicas", "pocao sono", "pocao inocencia", "pocao inocencia",];
    var topper = ["capa invisibilidade", "pocao anti inteligencia", "pedra do despertar", "varinha das varinhas", "pocao da inocencia", "pocao da mentira", "pocao da mentira"];
    //document.write(topper);


    //Ações do topper 
    topper.pop(); //consumiu uma pocao da mentira
    topper.splice(2, 2); //perdeu sua pedra
    topper.push("botas mágicas"); //ganhou botas magicas do drofo
    drofo.splice(1, 1); //drofo fica com menos uma bota 
    topper.push("escudo magico"); //achou um escudo magico 
    topper.push("espada magica");  //achou uma espada magica


    //Ações do drofo
    drofo.push("Bota magica"); //Ganhou uma bota magina
    drofo.splice(3, 3); //Usou sua pocao do sono
    topper.splice(1, 1); //usa pocao de inocencia nao achei nehuma anti inteligencia
    drofo.push("ovo de dragão"); //acha ovo de dragão
    drofo.push("coxinha"); //acha coxinha

    document.write("INVENTARIO DO TOPPER: " + topper + "<br><br>"); //exibe inventario topper

    document.write("INVENTARIO DO DROFO: " + drofo); //exibe inventario drofo


}


/*4.Faça um programa que leia 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.*/

function exercicio4() {
    var romances = ["Memorial de Aires (1908)", "Ressurreição (1872)", "Casa Velha (1885)", "Memórias Póstumas de Brás Cubas (1881)", "Helena (1876)", "Quincas Borba (1891)", "Esaú e Jacó (1904)", "A mão e a luva (1874)", "Dom Casmurro (1899)", "Iaiá Garcia (1878)"];
    var poesias = ["Americanas (1875)", "Ocidentais (1880)", "Falenas (1870)", "Crisálidas (1864)", "Poesias Completas (1901)"];
    var contos = ["Várias Histórias (1896)", "Histórias sem Data (1884)", "Papéis Avulsos (1882)", "Contos Fluminenses (1870)", "Histórias da Meia-Noite (1873)", "Relíquias de Casa Velha (1906)", "Páginas Recolhidas (1899)"];
    var geral = []


    for (let i = 0; i < 3; i++) {
        var primeiros = romances[i];
        geral.push(primeiros);
    }

    for (let i = 0; i < 3; i++) {
        var primeiros = poesias[i];
        geral.push(primeiros);
    }

    for (let i = 0; i < 3; i++) {
        var primeiros = contos[i];
        geral.push(primeiros);
    }

    alert("O primeiro ARRAY é: " + romances);
    alert("O segundo ARRAY é: " + poesias);
    alert("O terceiro ARRAY é: " + contos);


    alert("O array com as 3 primeiras obras de cada array é: " + geral);

}

