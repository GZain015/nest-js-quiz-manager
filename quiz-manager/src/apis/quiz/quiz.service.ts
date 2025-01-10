import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
  getAllquiz() {
    return [1, 2, 3, 'Hello World!'];
  }
}
