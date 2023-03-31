import Settings from "../src/js/app";

test("test throwError of method setSettings by incorrect title of setting", () => {
  const settings = new Settings();

  expect(() => {
    settings.setSettings({ sheme: "dark", music: "trance" });
  }).toThrow("Ошибка. Вы ввели недопустимые значения настроек");
});

test("test throwError of method setSettings by incorrect value of setting", () => {
  const settings = new Settings();

  expect(() => {
    settings.setSettings({ theme: "dar", music: "trance" });
  }).toThrow("Ошибка. Вы ввели недопустимые значения настроек");
});

test("test for method setSettings create new userSettings", () => {
  const settings = new Settings();
  settings.setSettings({ theme: "dark", music: "trance" });
  expect(settings.userSettings.size).toBe(3);
});

test("test for method getSetting get a finalSettings", () => {
  const settings = new Settings();
  settings.setSettings({ theme: "dark", music: "trance" });
  const result = settings.getSettings();
  expect(result.size).toBe(3);
});
