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

export const comparePasswords = async (
  plainPassword: string,
  storedHash: string,
): Promise<boolean> => {
  try {
    return await bcrypt.compare(plainPassword, storedHash);
  } catch (error) {
    throw error;
  }
};
