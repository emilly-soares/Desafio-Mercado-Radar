<h1 align="center">Desafio Mercado Radar</h1>
<h1 align="center">
    <a href="https://pt-br.reactjs.org/">🔗 React</a>
</h1>
<p align="center">🚀 lib para construir interfaces do usuário com componentes reutilizáveis</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/b5021192-97de-490d-a115-c26260106c8b/deploy-status)](https://app.netlify.com/sites/desafio-robo/deploys)

<p align="center">
<a href="#Pré-requisito">Pré-requisito</a> •
<a href="#Executar">Executar</a> •
 <a href="#Tecnologia">Tecnologia</a> • 
 <a href="#Desafio">Desafio</a> •
<a href="#Deploy">Deploy</a> •
 <a href="#autor">Autor</a>
</p>

<h4 align="center"> 
	🚧 🚀 Construído ...  🚧
</h4>

![image](https://github.com/emilly-soares/Desafio-Mercado-Radar/assets/54116441/ccddbe1c-0f0e-4a44-8039-07689ca24762)


### Pré-requisito

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


### Executar
<h5> Clone este repositório</h5>
$ git clone https://github.com/emilly-soares/Desafio-Mercado-Radar.git</>
<h5>Acesse a pasta do projeto no seu terminal/cmd</h5>
$ cd Desafio-Mercado-Radar
<h5>Instale as dependências</h5>
$ npm install
<h5>Execute a aplicação em modo de desenvolvimento</h5>
$ npm run start

<h5> A aplicação será aberta na porta:3000 - acesse http://localhost:3000</h5>


### Tecnologia 

A seguinte ferramenta foi utilizada na construção do projeto:
- [React](https://pt-br.reactjs.org/)


### Desafio
 
Um robô deve ser colocado pela MRSA (Mercado Radar Space Agency) para explorar um terreno em Marte.
 
Esse terreno, retangular, precisa ser navegado pelo robô de tal forma que suas câmeras acopladas possam obter uma visão completa da região, enviando essas imagens novamente para o QG da Mercado Radar.
 
A posição do robô é representada pela combinação de coordenadas cartesianas (x, y) e por uma letra, que pode representar uma das quatro orientações: NORTH, SOUTH, EAST e WEST.
 
Para simplificar a navegação, a região “marciana” a ser explorada foi subdividida em sub-regiões retangulares.
 
Uma posição válida do robô, seria (0, 0, N), que significa que o robô está posicionado no canto esquerdo inferior do terreno, voltado para o Norte.
Para controlar o robô, a MRSA envia uma string simples, que pode conter as letras ‘L’, ‘R’ e ‘M’. As letras ‘L’ e ‘R’ fazem o robô rotacionar em seu próprio eixo 90 graus para esquerda ou para direita, respectivamente, sem se mover da sua posição atual. A letra ‘M’ faz o robô deslocar-­se uma posição para frente.
Assuma que o robô se movimenta para o NORTE em relação ao eixo y. Ou seja, um passo para o NORTE da posição (x, y), é a posição (x, y+1)
 
Exemplo: Se o robô está na posição (0, 0, N), o comando "MML" fará ele chegar na posição (0,2,W)
 
<h4>Requisitos do desafio</h4>
 
O terreno deverá ser iniciado com 5x5 posições;
O robô inicia na coordenada (0, 0, N);
Todos os comandos enviados ao robô devem retornar a posição dele (Posição após a execução do comando);
O robô não pode se movimentar para fora da área especificada;
Não é necessário guardar o estado do robô;
 
<h4>Objetivo Final</h4>
 
Escreva um programa que permita aos engenheiros da MRSA enviar comandos para o robô e saber onde ele se encontra. Os engenheiros irão rodar testes no seu software para garantir que ele se comporta da forma esperada, antes de enviar o robô para Marte.


### Deploy 
🔗[desafio-robo.netlify.app](https://desafio-robo.netlify.app/)🚀


### Autor
Feito por Emilly Soares 👋🏽 Entre em contato!🚀


