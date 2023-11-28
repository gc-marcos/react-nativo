import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import UsuarioLogado from './components/UsuarioLogado';
// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
//import ParImpar from './components/ParImpar';
//import Diferenciar from './components/Diferenciar';
//import ContadorV2 from './components/contador/ContadorV2';
//import Pai from './components/indireta/Pai';
//import Pai from './components/direta/Pai';
//import Contador from './components/Contador';
//import Botao from './components/Botao';
//import Titulo from './components/Titulo';
//import MinMax from './components/MinMax';
//import Aleatorio from './components/Aleatorio';
//import CompPadrao, {Comp1, Comp2} from './components/Multi';
//import Primeiro from './components/Primeiro';

export default () => (
  <SafeAreaView style={style.App}>
    <UsuarioLogado usuario={{nome: 'Mar', email: 'mar@mar.com'}} />
    <UsuarioLogado usuario={{nome: 'Ana'}} />
    <UsuarioLogado usuario={{email: 'mar@mar.com'}} />
    <UsuarioLogado usuario={null} />
    <UsuarioLogado usuario={{}} />

    {/*<Familia>
      <Membro nome="Bia" sobrenome="Arruda" />
      <Membro nome="Carlos" sobrenome="Arruda" />
    </Familia>
    <Familia>
      <Membro nome="Julia" sobrenome="Silva" />
      <Membro nome="Marcos" sobrenome="Silva" />
      <Membro nome="Maria" sobrenome="Silva" />
      <Membro nome="Marcio" sobrenome="Silva" />
      <Membro nome="Robin" sobrenome="Silva" />
    </Familia>
    <ParImpar num={2} />
    <Diferenciar />
    <ContadorV2 />
    <Pai />
    <Pai />
    <Contador inicial={100} passo={13} />
    <Contador />
    <Botao />
    <Titulo
      principal="Cadastro Produto"
      secundario="Tela de cadrastro do Produto"
    />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <Aleatorio min={1} max={60} />
    <MinMax menor={3} maior={10} />
    <MinMax menor={10} maior={90} />
    <CompPadrao />
    <Comp1 />
    <Comp2 />
    <Primeiro /> */}
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
