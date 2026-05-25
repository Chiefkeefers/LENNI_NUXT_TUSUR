import { defineRule, configure } from "vee-validate";
import { email, required } from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import ru from "@/json/vee-validate/ru.json";

const phoneValidator = (value) => {
  if (value === null || value === undefined || value === "") return true;

  return /^((\+7|8)\s?(\(\d{3}\)|\d{3})\s?\d{3}-?\d{2}-?\d{2})$/.test(value);
};

const rules = {
  email,
  required,
  phone: phoneValidator,
};

export default defineNuxtPlugin(() => {
  Object.keys(rules).forEach((rule) => {
    defineRule(rule, rules[rule]);
  });
  configure({
    generateMessage: localize({
      ru,
    }),
  });

  setLocale("ru");
});