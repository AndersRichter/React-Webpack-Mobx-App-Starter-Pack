const userEmails = [
  'ad@ad',
  'qwert@qwe'
];

export const sentData = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomValue = Math.random() * (10 - 1) + 1;

      if (userEmails.includes(data.email)) {
        reject('Email already exists');
      } else if (randomValue > 5) {
        resolve('Success');
      } else {
        reject('Unknown error');
      }
    }, 2000)
  })
};
