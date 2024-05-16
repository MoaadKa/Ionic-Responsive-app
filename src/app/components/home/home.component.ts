import { Component, HostListener, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {}

  public innerWidth: any;
  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }

  onCkeck() {
    this.homeService.getIp().subscribe((response) => {
      if (this.sum(response.ipAddress) > 100) {
        alert('OK');
      } else {
        alert('KO');
      }
    });
  }
  sum(str: string): number {
    const str_: Array<string> = str.split('.');
    let sum = 0;
    str_.forEach((num) => {
      sum += parseInt(num);
    });
    return sum;
  }
}
