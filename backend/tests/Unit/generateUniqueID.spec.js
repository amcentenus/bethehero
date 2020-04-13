const generateUniqueID = require('../../src/Utils/generateUniqueID');

describe('Generate unique ID', () => {
  it('Should generate an unique ID', () => { 
    const id = generateUniqueID();
    expect(id).toHaveLength(8);
  })
})