
import { v4 as uuidv4 } from 'uuid';

function generateUniqueString(maxLength = 32) {
  return uuidv4().replace(/-/g, '').slice(0, maxLength); // Lấy 32 ký tự
}


export { generateUniqueString }
