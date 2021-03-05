export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;

  if (typeof this.name !== 'string' || this.name.length < 2 || this.name.length > 10) {
    throw new Error('Некорректное значение "name"');
  }

  const unit = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].find((a) => a === this.type);

  if (!unit || typeof this.type !== 'string') {
    throw new Error('Некорректное значение "type"');
  }

  if (unit === 'Bowman') {
    return { unit: 'Bowman', attack: 25, defence: 25 };
  }

  if (unit === 'Swordsman') {
    return { unit: 'Swordsman', attack: 40, defence: 10 };
  }

  if (unit === 'Magician') {
    return { unit: 'Magician', attack: 10, defence: 40 };
  }

  if (unit === 'Daemon') {
    return { unit: 'Daemon', attack: 10, defence: 40 };
  }

  if (unit === 'Undead') {
    return { unit: 'Undead', attack: 25, defence: 25 };
  }

  if (unit === 'Zombie') {
    return { unit: 'Zombie', attack: 40, defence: 10 };
  }
}
