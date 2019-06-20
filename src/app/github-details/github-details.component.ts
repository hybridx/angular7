import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-details',
  templateUrl: './github-details.component.html',
  styleUrls: ['./github-details.component.css']
})
export class GithubDetailsComponent implements OnInit {
  showImage = false;
  imagePath = '';
  username: string = 'hybridx';

  constructor() { }

  ngOnInit() {
  }

  onGetImage() {
    this.showImage = true;
    this.imagePath = 'https://github.com/' + this.username + '.png';
  }

  onReset() {
    this.showImage = false;
    this.imagePath = 'https://github.com/hybridx.png';
  }
}
