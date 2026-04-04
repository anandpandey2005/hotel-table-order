import { randomInt } from 'crypto';

export const generateOtp = (): string => {
  const otp = randomInt(100000, 1000000).toString();
  return otp;
};
