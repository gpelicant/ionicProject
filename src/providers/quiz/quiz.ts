import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuizProvider {
  url:string;

  constructor(public http: Http) {
    console.log('Hello QuizProvider Provider');
    this.url = 'https://opentdb.com/api.php?amount='
  }



  getQuiz(category, difficulty, quizNum, type, encodage){
    return this.http.get(this.url + quizNum + '&encodage=' + encodage + '&type=' + type + '&difficulty=' + difficulty + '&category=' + category)
      .map(res => res.json());

      
  }
}
