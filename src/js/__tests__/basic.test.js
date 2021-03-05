import Character from '../basic';

test('Объект должен создаваться', () => {
  expect(new Character('Bowman', 'Bowman')).toEqual({ unit: 'Bowman', attack: 25, defence: 25 });
});

test('Объект должен создаваться', () => {
  expect(new Character('Swordsman', 'Swordsman')).toEqual({ unit: 'Swordsman', attack: 40, defence: 10 });
});

test('Объект должен создаваться', () => {
  expect(new Character('Magician', 'Magician')).toEqual({ unit: 'Magician', attack: 10, defence: 40 });
});

test('Объект должен создаваться', () => {
  expect(new Character('Daemon', 'Daemon')).toEqual({ unit: 'Daemon', attack: 10, defence: 40 });
});

test('Объект должен создаваться', () => {
  expect(new Character('Undead', 'Undead')).toEqual({ unit: 'Undead', attack: 25, defence: 25 });
});

test('Объект должен создаваться', () => {
  expect(new Character('Zombie', 'Zombie')).toEqual({ unit: 'Zombie', attack: 40, defence: 10 });
});

test('Объект не должен создаваться', () => {
  expect(() => new Character('Swordsman', 'string')).toThrow();
});

test('Объект не должен создаваться', () => {
  expect(() => new Character('14', 'array')).toThrow();
});

test('Объект не должен создаваться', () => {
  expect(() => new Character('array')).toThrow();
});

test('Объект не должен создаваться', () => {
  expect(() => new Character()).toThrow();
});

test('Объект не должен создаваться', () => {
  expect(() => new Character(14, {})).toThrow();
});
