import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @Input() title = 'The page you are looking for can not be found';
  
  constructor() { }

  ngOnInit() {
  }

}
