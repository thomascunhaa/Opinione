import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PollComponent } from '../poll/poll.component';

@Component({
  selector: 'app-information-feed',
  standalone: true,
  imports: [CommonModule, PollComponent],
  templateUrl: './information-feed.component.html',
  styleUrl: './information-feed.component.css'
})
export class InformationFeedComponent {

  listInformation = [
    {
      name: 's/figma',
      datePost: '6 hr ago',
      img: '',
      information: 'A morte do líder do grupo Hezbollah, Hassan Nasrallah, confirmada neste sábado (28), tem um peso político maior do que a de Osama bin Laden ou de Saddam Hussein, enfraquece consideravelmente a posição do Irã na região e faz Teerã apostar todas as suas fichas em seu programa nuclear, segundo analistas.A morte do líder do grupo Hezbollah, Hassan Nasrallah, confirmada neste sábado (28), tem um peso político maior do que a de Osama bin Laden ou de Saddam Hussein, enfraquece consideravelmente a posição do Irã na região e faz Teerã apostar todas as suas fichas em seu programa nuclear, segundo analistas.'
    },
    {
      name: 's/figma',
      datePost: '6 hr ago',
      img: '',
      information: 'A morte do líder do grupo Hezbollah, Hassan Nasrallah, confirmada neste sábado (28), tem um peso político maior do que a de Osama bin Laden ou de Saddam Hussein, enfraquece consideravelmente a posição do Irã na região e faz Teerã apostar todas as suas fichas em seu programa nuclear, segundo analistas.'
    },
    {
      name: 's/figma',
      datePost: '6 hr ago',
      img: '',
      information: 'A morte do líder do grupo Hezbollah, Hassan Nasrallah, confirmada neste sábado (28), tem um peso político maior do que a de Osama bin Laden ou de Saddam Hussein, enfraquece consideravelmente a posição do Irã na região e faz Teerã apostar todas as suas fichas em seu programa nuclear, segundo analistas.A morte do líder do grupo Hezbollah, Hassan Nasrallah, confirmada neste sábado (28), tem um peso político maior do que a de Osama bin Laden ou de Saddam Hussein, enfraquece consideravelmente a posição do Irã na região e faz Teerã apostar todas as suas fichas em seu programa nuclear, segundo analistas.'
    }
  ]

}
