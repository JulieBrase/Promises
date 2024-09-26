import GameSavingLoader from './src/GameSavingLoader';

GameSavingLoader.load()
  .then((saving) => {
    console.log('Сохранение загружено:', saving);
  })
  .catch((error) => {
    console.error(error);
  });
