import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { GamePage } from '../game/game';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  category:number;
  difficulty:string;
  quizNum:number;
  type: string;
  encodage: string;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage:Storage
  ) {
    this.storage.get('option').then((val) => {
      if(val != null){
        let option = JSON.parse(val);
        this.category = option.category;
        this.difficulty = option.difficulty;
        this.quizNum = option.quizNum;
        this.type=option.type;
        this.encodage=option.encodage;

      } else {
        this.category = 17;
        this.difficulty = 'medium';
        this.quizNum = 4;

        this.type='';
        this.encodage='';


      }
    })
  }

    begin(){

    this.navCtrl.setRoot(GamePage);

  };

  saveForm(){
    let option = {
      category: this.category,
      difficulty: this.difficulty,

      quizNum: this.quizNum,
      type: this.type,
      encodage: this.encodage

    }
    this.storage.set('option', JSON.stringify(option));
  //  this.navCtrl.push(HomePage);
  }

}
