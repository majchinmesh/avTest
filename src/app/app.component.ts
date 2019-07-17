import { Component,Renderer2 } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'avTest';
  ringtones : string[] = [
  "ringtone (1).mp3",
  "ringtone (2).mp3",
  "ringtone (3).mp3",
  "ringtone (4).mp3",
  "ringtone (5).mp3",
  "ringtone (6).mp3",
  "ringtone (7).mp3",
  "ringtone (8).mp3",
  "ringtone (9).mp3",
  "ringtone (10).mp3"
]; 
  audios = {}; 
  duration = {};
  constructor(private renderer: Renderer2){
    console.log("Loading AppComponent page...");
    for(let r in this.ringtones ){
      this.audios[this.ringtones[r]] = new Audio();
      this.audios[this.ringtones[r]].src = "../assets/audio/"+this.ringtones[r] ;
      this.audios[this.ringtones[r]].load();
      this.audios[this.ringtones[r]].addEventListener('loadeddata',()=>{
        this.duration[this.ringtones[r]] =  this.audios[this.ringtones[r]].duration ;  
      })
      
    }
  }

  playPause(r:string,event){
    const hasClass = event.target.classList.contains('fa-play');
    if(hasClass) {
      console.log("Playing "+r);
      this.renderer.removeClass(event.target, 'fa-play');
      this.renderer.addClass(event.target, 'fa-pause');
      this.audios[r].play();
      this.audios[r].addEventListener('ended' , ()=>{
        console.log("Audio ended...");
        this.renderer.removeClass(event.target, 'fa-pause');
        this.renderer.addClass(event.target, 'fa-play');
      });
      
    } else {
      console.log("Playing : "+ this.audios[r].p);
      this.audios[r].pause();
      console.log("Paused "+r);
      this.renderer.removeClass(event.target, 'fa-pause');
      this.renderer.addClass(event.target, 'fa-play');
    }
  }

  playAudio(){
    let audio = new Audio();
    //audio.src = "../assets/audio/001.mp3";
    audio.src = "https://d6cp9b00-a.akamaihd.net/downloads/ringtones/files/mp3/my-fav-tone-45614-45974.mp3";
    audio.load();
    audio.play();
  }
}

