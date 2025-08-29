import * as constant from "./constants.js";

export const phoneValidation = (phone: unknown) => {
  const phoneRegex = /^\+?\d{7,15}$/;

  if (typeof phone !== "string" || !phoneRegex.test(phone))
    throw new Error("Invalid phone number. It must be 7–15 digits.");
  else return true;
};

export const NonNegativeNumberValidation = (number: unknown) => {
  if (typeof number !== "number" || !Number.isFinite(number))
    throw new Error("Invalid value: must be a number.");
  else if (number < 0)
    throw new Error("Invalid value: number must be non negative.");
  else return true;
};

export const hoursValidation = (hours: unknown) => {
  if (!NonNegativeNumberValidation(hours) && Number(hours) > constant.MAX_HOURS)
    throw new Error(
      `Invalid hours value: hours must be a number and less then ${constant.MAX_HOURS}`,
    );
  else return true;
};
