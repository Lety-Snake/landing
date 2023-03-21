import { Component, OnInit } from '@angular/core';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss'],
})
export class VotingComponent implements OnInit {

  constructor(private servi: RatingService) { }

  ngOnInit() { }

  finalPunc: Vote = new Vote();
  addPunctuation(e: string) {
    let section = e.split('-')[0];
    let punctuaction = parseInt(e.split('-')[1]);
    if (section == 'gameplay')
      this.vote.gameplay = punctuaction;
    else if (section == 'music')
      this.vote.music = punctuaction;
    else if (section == 'design')
      this.vote.design = punctuaction;
    else if (section == 'story')
      this.vote.story = punctuaction;
    else if (section == 'difficulty')
      this.vote.difficulty = punctuaction;
  }
  sendVoting() {
    let comm = document.getElementById('commentary') as HTMLInputElement;
    if (!this.vote.gameplay)
      return this.showAlert('Gameplay')
    else if (!this.vote.music)
      return this.showAlert('Music')
    else if (!this.vote.design)
      return this.showAlert('Design')
    else if (!this.vote.story)
      return this.showAlert('Story')
    else if (!this.vote.difficulty)
      return this.showAlert('Difficulty')
    // else if (!comm.value)
    //   return this.showAlert('Commentary')
    else {
      this.sendRequest()
    }

  }
  sendRequest() {
    let comm = document.getElementById('commentary') as HTMLInputElement;
    let commentary = comm.value;
    let btn = document.getElementById('btnSend') as HTMLButtonElement;
    this.vote.commentary = commentary;
    this.vote.teamId = 'Letty-Snake';
    this.servi.sendVoting(this.vote).subscribe(response => {
      console.log(response); // Handle the response here
      alert('Thanks for voting :D')
      btn.disabled = true;
      btn.classList.add('btnSent');
      btn.classList.remove('btn');
    });
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
  vote = {
    "teamId": "Letty-Snake",
    "design": null,
    "difficulty": null,
    "gameplay": null,
    "music": null,
    "story": null,
    "commentary": ""
  };
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