/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'PokemonPrueba',
  hp: 100,
  attack: 100,
  defense: 100,
  speed: 100,
  height: 100,
  weight: 100,
  img: "",
};
const pokemonaCrear = {
  name: 'PokemonCreado',
  hp: 100,
  attack: 100,
  defense: 100,
  speed: 100,
  height: 100,
  weight: 100,
  img: "",
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));
  describe('GET /pokemons', () => {
    it('should get 200', () =>
      agent.get('/pokemons').expect(200)
    ); 
  });
  describe(`GET /pokemons/pokemon?name=`, () => {
    it('should get 200', () =>
      agent.get(`/pokemons/?name=${pokemon.name}`).expect(200)
    ); 
  });
  describe(`GET /pokemons/1`, () => {
      it('should get 200', () =>
        agent.get(`/pokemons/1`).expect(200)
      ); 
  });
}); 

