import { v4 as Uuidv4 } from 'uuid';

export class J8UuidWrapper {
  
  constructor() {
  }

  Generate() {
    return Uuidv4();
  }

}