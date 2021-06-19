import React from 'react';
import ReactDOM from 'react-dom';
import CalculadoraService from './calculadora.service';

describe('teste do CalculadoraService', () => {

    const [ calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO ] = CalculadoraService();

    it ('deve garantir que 1 + 4 seja = 5.', () => {
        let soma = calcular(1,4,SOMA);
        expect(soma).toEqual(5);
    });

    it ('deve garantir que 1 -4 seja = -3.', () => {
        let subtracao = calcular(1,4,SUBTRACAO);
        expect(subtracao).toEqual(-3);
    });

    it ('deve garantir que 1 / 4 seja = 0.25', () => {
        let divisao = calcular(1,4,DIVISAO);
        expect(divisao).toEqual(0.25);
    });

    it ('deve garantir que 1 * 4 = 4.', () => {
        let multiplicacao = calcular(1,4,MULTIPLICACAO);
        expect(multiplicacao).toEqual(4);
    });

    it ('deve ser inválido 1 % 4', () => {
        let operacaoinvalida = calcular(1,4,'%');
        expect(operacaoinvalida).toEqual(0);
    });

});