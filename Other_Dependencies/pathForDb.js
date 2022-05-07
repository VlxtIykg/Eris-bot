import * as path from 'path';
import { fileURLToPath } from 'url';

export const dbPath = (url, ...dbFileToPath) => {
    return path.join(fileURLToPath(path.dirname(url)), ...dbFileToPath.filter(p => p != null))
}