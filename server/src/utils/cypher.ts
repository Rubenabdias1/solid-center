import crypto from 'crypto';

const iv = Buffer.alloc(16);

export const encrypt = (message: string) => {
  const cipher = crypto.createCipheriv(
    process.env.ENCRYPTION_ALGORITHM || 'aes-256',
    process.env.ENCRYPTION_KEY || '',
    iv
  );
  let encrypted = cipher.update(message, 'utf-8', 'hex');
  encrypted += cipher.final('hex');

  return encrypted;
};

export const decrypt = (ciphertext: string) => {
  const decipher = crypto.createDecipheriv(
    process.env.ENCRYPTION_ALGORITHM || 'aes-256',
    process.env.ENCRYPTION_KEY || '',
    iv
  );
  let decrypted = decipher.update(ciphertext, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
  return decrypted;
};
