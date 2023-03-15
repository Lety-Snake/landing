import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss'],
})
export class VotingComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  finalPunc: Vote = new Vote();
  addPunctuation(e: string) {
    let section = e.split('-')[0];
    let punctuaction = parseInt(e.split('-')[1]);
    if (section == 'gameplay')
      this.finalPunc.gameplay = punctuaction;
    else if (section == 'music')
      this.finalPunc.music = punctuaction;
    else if (section == 'design')
      this.finalPunc.design = punctuaction;
    else if (section == 'story')
      this.finalPunc.story = punctuaction;
    else if (section == 'difficulty')
      this.finalPunc.difficulty = punctuaction;
  }
  sendVoting() {
    let comm = document.getElementById('commentary') as HTMLInputElement;
    if (!this.finalPunc.gameplay)
      return this.showAlert('Gameplay')
    else if (!this.finalPunc.music)
      return this.showAlert('Music')
    else if (!this.finalPunc.design)
      return this.showAlert('Design')
    else if (!this.finalPunc.story)
      return this.showAlert('Story')
    else if (!this.finalPunc.difficulty)
      return this.showAlert('Difficulty')
    else if (!comm.value)
      return this.showAlert('Commentary')
    else {
      this.sendRequest()
    }

  }
  sendRequest() {
    let comm = document.getElementById('commentary') as HTMLInputElement;
    let commentary = comm.value;
    this.finalPunc.commentary = commentary;
    this.finalPunc.teamId = 'Letty-Snake';
  }
  section
  showAlert(section: string) {
    let back = document.getElementById('backModal') as HTMLElement;
    let modal = document.getElementById('modal') as HTMLElement;

    back.style.display = 'flex';
    setTimeout(() => {
      modal.style.transform = 'scaleY(.2) scaleX(1)';
      setTimeout(() => {
        modal.style.transform = 'scaleY(1) scaleX(1)';
      }, 400);
    }, 200);
    this.section = section;
  }
  closeModal() {
    let back = document.getElementById('backModal') as HTMLElement;
    let modal = document.getElementById('modal') as HTMLElement;
    modal.style.transform = 'scaleY(.2) scaleX(1)';
    setTimeout(() => {
      modal.style.transform = 'scaleY(.2) scaleX(0)';
      setTimeout(() => {
        back.style.display = 'none';
      }, 400);
    }, 200);
  }
}
export class Vote {
  teamId: string;
  gameplay: number;
  music: number;
  design: number;
  story: number;
  difficulty: number;
  commentary: string;
}