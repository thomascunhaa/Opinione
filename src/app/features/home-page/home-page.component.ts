import { Component } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { SideBarComponent } from '../../components/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';
import { InformationFeedComponent } from '../../components/information-feed/information-feed.component';
import { RecentPostInformationComponent } from '../../components/recent-post-information/recent-post-information.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavBarComponent, SideBarComponent, RouterOutlet, InformationFeedComponent, RecentPostInformationComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
