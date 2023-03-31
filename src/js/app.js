class Settings {
  constructor() {
    this.availableSettings = {
      theme: ["dark", "ligth", "gray"],
      music: ["trance", "pop", "rock", "chillout", "off"],
      difficulty: ["easy", "normal", "hard", "nigthmare"],
    };
  }

  setSettings(settings) {
    this.userSettings = new Map([
      ["theme", "dark"],
      ["music", "trance"],
      ["difficulty", "easy"],
    ]);
    const test = Object.entries(settings);
    test.forEach(([title, description]) => {
      if (
        !(title in this.availableSettings) ||
        !this.availableSettings[title].includes(description)
      ) {
        throw new Error("Ошибка. Вы ввели недопустимые значения настроек");
      }
      this.userSettings.set(title, description);
    });
  }

  getSettings() {
    return this.userSettings;
  }
}

export default Settings;

const settings = new Settings();
settings.setSettings({ theme: "dark", music: "trance" });
const result = settings.getSettings();
console.log(result);
