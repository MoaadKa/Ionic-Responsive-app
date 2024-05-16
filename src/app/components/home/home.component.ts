import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    IonicModule
  ],
})
export class HomeComponent  implements OnInit {

  constructor(private homeService: HomeService) { }

  ngOnInit() {}


  onCkeck() {
    this.homeService.getIp().subscribe(
      (response) => {
        if(response.ipAddress > 100) {
          alert("OK")
        } else {
          alert("KO")
        }
      }
    )
  }
}
