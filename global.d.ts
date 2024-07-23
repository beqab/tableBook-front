import ka from "./messages/en.json";

type Messages = typeof ka;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
