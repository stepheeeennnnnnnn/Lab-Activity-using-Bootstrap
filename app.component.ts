import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab3';
  apptitles=['Pleasure to meet you.','I am glad we could connect.','Delighted to meet you.']
  index= 0
  updateTitle()
  {
    this.index++
    if(this.index==3){
      this.index= 0
    }
  }
}
