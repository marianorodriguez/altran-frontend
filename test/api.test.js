/* global test expect describe */
const API = require('../api');

const dataKeys = ['id', 'name', 'thumbnail', 'age', 'height', 'weight', 'hair_color', 'professions', 'friends'];

describe('API tests', () => {
  test('API endpoint should return an array', async () => {
    const data = await API.getBrastlewarkGnomes();
    expect(Array.isArray(data)).toBe(true);
  });

  test('API endpoint should return data with the proper format', async () => {
    const [data] = await API.getBrastlewarkGnomes();
    expect(Object.keys(data)).toEqual(expect.arrayContaining(dataKeys));
  });
});
