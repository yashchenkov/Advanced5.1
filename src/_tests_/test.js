import Bowman from '../js/Bowman';
import Daemon from '../js/Daemon';
import Swordsman from '../js/Swordsman';
import Magician from '../js/Magician';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';

test('testing Bowman func', () => {
  const data = new Bowman('Виталий');

  expect(data.name).toEqual('Виталий');
  expect(data.type).toEqual('Bowman');
  expect(data.health).toEqual(100);
  expect(data.level).toEqual(1);
  expect(data.attack).toEqual(25);
  expect(data.defence).toEqual(25);
});

test('testing Daemon func', () => {
  const data = new Daemon('Виталий');

  expect(data.name).toEqual('Виталий');
  expect(data.type).toEqual('Daemon');
  expect(data.health).toEqual(100);
  expect(data.level).toEqual(1);
  expect(data.attack).toEqual(10);
  expect(data.defence).toEqual(40);
});

test('testing Swordsman func', () => {
  const data = new Swordsman('Виталий');

  expect(data.name).toEqual('Виталий');
  expect(data.type).toEqual('Swordsman');
  expect(data.health).toEqual(100);
  expect(data.level).toEqual(1);
  expect(data.attack).toEqual(40);
  expect(data.defence).toEqual(10);
});

test('testing Undead func', () => {
  const data = new Undead('Виталий');

  expect(data.name).toEqual('Виталий');
  expect(data.type).toEqual('Undead');
  expect(data.health).toEqual(100);
  expect(data.level).toEqual(1);
  expect(data.attack).toEqual(25);
  expect(data.defence).toEqual(25);
});

test('testing Magician func', () => {
  const data = new Magician('Виталий');

  expect(data.name).toEqual('Виталий');
  expect(data.type).toEqual('Magician');
  expect(data.health).toEqual(100);
  expect(data.level).toEqual(1);
  expect(data.attack).toEqual(10);
  expect(data.defence).toEqual(40);
});

test('testing Zombie func', () => {
  const data = new Zombie('Виталий');

  expect(data.name).toEqual('Виталий');
  expect(data.type).toEqual('Zombie');
  expect(data.health).toEqual(100);
  expect(data.level).toEqual(1);
  expect(data.attack).toEqual(40);
  expect(data.defence).toEqual(10);
});

test('testing damage method', () => {
  const data = new Zombie('Виталий');
  const points = 10;
  const health = data.health;
  data.damage(points);

  expect(data.health).toEqual(health - points * (1 - data.defence / 100));
});

test('testing levelUp function', () => {
  const data = new Zombie('Виталий');
  data.levelUp();

  expect(data.level).toEqual(2);
  expect(data.attack).toEqual(48);
  expect(data.defence).toEqual(12);
})
