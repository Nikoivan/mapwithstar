class Settings {
  constructor() {
    this.defaultSettings = new Map();
    this.userSettings = new Map();
    this.availableSettings = {
      theme: ['dark', 'ligth', 'gray'],
      music: ['trance', 'pop', 'rock', 'chillout', 'off'],
      difficulty: ['easy', 'normal', 'hard', 'nigthmare'],
    };

    this.defaultSettings.set('theme', 'dark');
    this.defaultSettings.set('music', 'trance');
    this.defaultSettings.set('difficulty', 'easy');
  }

  setSettings(settings) {
    const test = Object.entries(settings);
    test.forEach((el) => {
      if (
        !(el[0] in this.availableSettings)
        || !this.availableSettings[el[0]].includes(el[1])
      ) {
        throw new Error('Ошибка. Вы ввели недопустимые значения настроек');
      }
      this.userSettings.set(el[0], el[1]);
    });
  }

  getSettings() {
    const finalSettings = new Map();
    const defaultKeys = ['theme', 'music', 'difficulty'];
    defaultKeys.forEach((el) => {
      if (this.userSettings.has(el)) {
        finalSettings.set(el, this.userSettings.get(el));
      } else {
        finalSettings.set(el, this.defaultSettings.get(el));
      }
    });
    return finalSettings;
  }
}

export default Settings;

const settings = new Settings();
settings.setSettings({ theme: 'dark', music: 'trance' });
const result = settings.getSettings();
console.log(result);
