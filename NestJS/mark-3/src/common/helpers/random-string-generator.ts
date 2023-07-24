import randomstring from 'randomstring';

export const generateRandomString = (len: number, charset: string[]) => {
  return randomstring.generate({
    length: len,
    charset: charset,
  });
};
