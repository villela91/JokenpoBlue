console.clear();
const prompt = require("prompt-sync")();
// Permitir que eu decida quantas rodadas iremos fazer;
// Ler a minha escolha (Pedra, papel ou tesoura, ou os elementos escolhidos por você para o seu jogo);
// Decidir de forma aleatória a decisão do computador;
// Comparar os valores e declarar o vencedor (marcando 1 vitória para ele);
// Repetir os passos 2, 3 e 4 de acordo com o número de rodadas escolhido;
// Ao final das repetições, mostrar quantas rodadas cada jogador ganhou;
// Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
// Perguntar se o Jogador quer jogar novamente: Se sim volte ao primeiro passo, se não finalize o programa.
let rodadas = 0
let pontosMaquina = 0
let pontosPlayer = 0
let player = 0
let maquina = 0
let pontos1 = 0
let pontos2 = 0
let repete = "sim";
let objeto = ["pedra", "papel", "tesoura"]

pedra = objeto[0]
papel = objeto[1]
tesoura = objeto[2]

inicio:while(true){
console.log('bem vindo ao jokenpo !!');
    console.log('digite quantas rodadas vão ser: ') 
   rodadas = +prompt ();

   for( let i = 0; i <= rodadas -1; i++){
console.log('você prefere pedra, papel ou tesoura ?\n pedra = 0\n papel = 1 \n tesoura = 2 ');
player = +prompt()

let numeroMaquina = Math.floor(Math.random() * 3 );
maquina = numeroMaquina
if ((numeroMaquina == 0 && player == 1) || (numeroMaquina == 1 && player == 2)|| (numeroMaquina == 2 && player == 0) ){
    console.log('você venceu!!');
    pontosPlayer++
}
else if ((numeroMaquina == 1 &&  player == 0) || (numeroMaquina == 2 && player == 1) || (numeroMaquina == 0 && player ==2)){
    console.log('você perdeu !!!!!')
    pontosMaquina++
}
else {console.log("perdemo ")}
   }
   console.log(`você ganhou ${pontosPlayer} a maquinha ganhou:${pontosMaquina}`);
   if (pontosPlayer > pontosMaquina){
       console.log("parabens vocÊ ganhou!!!!!!")

   }else if (pontosMaquina > pontosPlayer){console.log("não foi dessa vez !!!")}
    else{console.log("empatamos")}
    console.log("hahaha, isso foi divertido. Deseja jogar de novo?");
 repete = prompt();
    if (repete == "sim") {continue inicio
       
     (i = 0), (pontos1 = 0), (pontos2 = 0);
   } else {
    
     console.log("ok, até mais");
     break
   }
}
