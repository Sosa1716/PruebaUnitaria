import test from 'node:test';
import assert from 'node:assert/strict';
import { calcularTotal } from '../src/calcularTotal.js';

test('calcula el total correctamente', () => {
  assert.equal(calcularTotal(75, 3), 225);
});

test('devuelve cero cuando no se piden platillos', () => {
  assert.equal(calcularTotal(75, 0), 0);
});

test('rechaza precios negativos', () => {
  assert.throws(() => calcularTotal(-10, 2), /precio/i);
});

test('rechaza cantidades negativas', () => {
  assert.throws(() => calcularTotal(75, -1), /cantidad/i);
});

test('rechaza cantidades decimales', () => {
  assert.throws(() => calcularTotal(75, 1.5), /cantidad/i);
});
