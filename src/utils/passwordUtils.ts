import bcrypt from "bcryptjs";

export const hashPassword = (password: string) => {
  const saltRounds = 10;

  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
      if (err) {
        reject(err);
      } else {
        resolve(hashedPassword);
      }
    });
  });
};

export const comparePasswords = (plainPassword: string, storedHash: string) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plainPassword, storedHash, (err, isMatch) => {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
};
