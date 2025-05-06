export const generateRegistration = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 7; i++) {
      const index = Math.floor(Math.random() * letters.length);
      result += letters[index];
    }
    return result;
  }