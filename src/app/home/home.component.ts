import { Component, OnInit } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';
import { MdIconModule, MdIconRegistry } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // constructor(private sanitizer: DomSanitizer) { }

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'favorite',
        sanitizer.bypassSecurityTrustResourceUrl('../assets/icons/favorite.svg'));
  }
  ngOnInit() {
  }

  profiles = [
    {
      name: "Sean L",
      bio: "Hey, what's up!",
      age: 20,
      profileUrl: "../assets/avatars/man1.png",
      imgUrl: "../assets/images/sailboats.jpeg"
    },
    {
      name: "Emily B",
      bio: "Hello there.",
      age: 25,
      profileUrl: "../assets/avatars/girl1.png",
      imgUrl: "../assets/images/blanket.jpeg"
    },
    {
      name: "Frank Z",
      bio: "How's it going?",
      age: 23,
      profileUrl: "../assets/avatars/man2.png",
      imgUrl: "../assets/images/swan.jpeg"
    },
    {
      name: "Judy U",
      bio: "Howdy!",
      age: 34,
      profileUrl: "../assets/avatars/woman1.png",
      imgUrl: "../assets/images/scrabble.jpeg"
    },
    {
      name: "Bob C",
      bio: "Hey, what's up!",
      age: 35,
      profileUrl: "../assets/avatars/man2.png",
      imgUrl: "../assets/images/train.jpeg"
    },
    {
      name: "Rose Z",
      bio: "Hello there.",
      age: 27,
      profileUrl: "../assets/avatars/woman2.png",
      imgUrl: "../assets/images/bookstore.jpeg"
    },
    {
      name: "Scott Z",
      bio: "That's funny.",
      age: 28,
      profileUrl: "../assets/avatars/boy1.png",
      imgUrl: "../assets/images/nightstreet.jpeg"
    },
    {
      name: "Michelle P",
      bio: "That's right.",
      age: 18,
      profileUrl: "../assets/avatars/girl2.png",
      imgUrl: "../assets/images/dock.jpeg"
    }
  ]
}
