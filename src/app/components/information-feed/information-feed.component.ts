import { Component } from '@angular/core';

@Component({
  selector: 'app-information-feed',
  standalone: true,
  imports: [],
  templateUrl: './information-feed.component.html',
  styleUrl: './information-feed.component.css'
})
export class InformationFeedComponent {

  name: string = 's/figma';
  datePost: string = '6 hr ago';

}
