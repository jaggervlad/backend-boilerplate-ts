import bcrypt from 'bcrypt';

export class HashHandle {
  static async compareHashedString(plainText: string, text: string) {
    try {
      return await bcrypt.compare(plainText, text);
    } catch (error) {
      throw error;
    }
  }

  static async hashString(val: string) {
    try {
      const salt = await bcrypt.genSalt(8);
      const hash = await bcrypt.hash(val, salt);

      return hash;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
