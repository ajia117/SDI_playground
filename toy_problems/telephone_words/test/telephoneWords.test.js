const telephoneWords = require('../src/telephoneWords.js');

describe('telephoneWords Test', () => {

  it('should be a function', () => {
    expect(telephoneWords).toBeInstanceOf(Function);
  });
  it('should take in a 4 digit string and outputs an array of strings', () => {
    expect(telephoneWords('0101'))
      .toEqual(['0101']);
  });
  it('should output all possible permutations for the first digit', () => {
    expect(telephoneWords('2001'))
      .toEqual(['A001', 'B001', 'C001']);
  });
  it('should equal all possible permutations for given digits', () => {
    expect(telephoneWords('2355'))
      .toEqual([
                'ADJJ', 'ADJK', 'ADJL',
                'ADKJ', 'ADKK', 'ADKL',
                'ADLJ', 'ADLK', 'ADLL',
                'ADLJ', 'ADLK', 'ADLL',
                'AEJJ', 'AEJK', 'AEJL',
                'AEKJ', 'AEKK', 'AEKL',
                'AELJ', 'AELK', 'AELL',
                'AELJ', 'AELK', 'AELL',
                'AFJJ', 'AFJK', 'AFJL',
                'AFKJ', 'AFKK', 'AFKL',
                'AFLJ', 'AFLK', 'AFLL',
                'AFLJ', 'AFLK', 'AFLL',
                'BDJJ', 'BDJK', 'BDJL',
                'BDKJ', 'BDKK', 'BDKL',
                'BDLJ', 'BDLK', 'BDLL',
                'BDLJ', 'BDLK', 'BDLL',
                'BEJJ', 'BEJK', 'BEJL',
                'BEKJ', 'BEKK', 'BEKL',
                'BELJ', 'BELK', 'BELL',
                'BELJ', 'BELK', 'BELL',
                'BFJJ', 'BFJK', 'BFJL',
                'BFKJ', 'BFKK', 'BFKL',
                'BFLJ', 'BFLK', 'BFLL',
                'BFLJ', 'BFLK', 'BFLL',
                'CDJJ', 'CDJK', 'CDJL',
                'CDKJ', 'CDKK', 'CDKL',
                'CDLJ', 'CDLK', 'CDLL',
                'CDLJ', 'CDLK', 'CDLL',
                'CEJJ', 'CEJK', 'CEJL',
                'CEKJ', 'CEKK', 'CEKL',
                'CELJ', 'CELK', 'CELL',
                'CELJ', 'CELK', 'CELL',
                'CFJJ', 'CFJK', 'CFJL',
                'CFKJ', 'CFKK', 'CFKL',
                'CFLJ', 'CFLK', 'CFLL',
                'CFLJ', 'CFLK', 'CFLL'
              ])
  });
});