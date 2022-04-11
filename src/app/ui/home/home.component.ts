import { Component, Inject, OnInit } from '@angular/core';
import { IAdviceRepository } from '@domain/advice/advice.repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  adviceData: any;

  constructor(@Inject('adviceRepository') private adviceService: IAdviceRepository) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.adviceService.getAdvice().subscribe((response)=> {
      this.adviceData = response.body.slip;
    })
  }

}
