import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-poll',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css'] // Corrigido de styleUrl para styleUrls
})
export class PollComponent implements AfterViewInit, OnDestroy {
  private chart: Chart | null = null; // Variável para armazenar o gráfico
  selectedSport: string = '';
  sports = ['Futebol', 'Basquete', 'Vôlei', 'Natação']; // Exemplo de esportes
  votes = [0, 0, 0, 0]; // Contagem de votos para cada esporte

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.initChart();
  }

  ngOnDestroy(): void {
    // Destroi o gráfico ao destruir o componente
    if (this.chart) {
      this.chart.destroy();
    }
  }



  initChart(): void {
    const ctx = document.getElementById('pollChart') as HTMLCanvasElement;

    // Destrua o gráfico anterior, se existir
    if (this.chart) {
      this.chart.destroy(); // Aqui, destruímos o gráfico atual antes de criar um novo
    }

    // Crie um novo gráfico
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.sports,
        datasets: [{
          label: 'Votos',
          data: this.votes,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          x: {
            type: 'category',
            title: {
              display: true,
              text: 'Esportes'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Número de Votos'
            }
          }
        }
      }
    });
  }

  updateChart(): void {
    if (this.chart) {
      // Atualiza os dados do gráfico com base nas contagens de votos
      this.chart.data.datasets[0].data = this.votes;
      this.chart.update(); // Atualiza o gráfico
    }
  }

  onVoteChange(index: number, event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    // Se o checkbox estiver marcado, incrementa os votos; se não, decrementa
    this.votes[index] += checkbox.checked ? 1 : -1;
    this.updateChart(); // Atualiza o gráfico
  }
  // public updateChart(): void {
  //   const ctx = document.getElementById('pollChart') as HTMLCanvasElement;

  //   // Destroi o gráfico anterior, se existir
  //   if (this.chart) {
  //     this.chart.destroy();
  //   }

  //   if (this.chart) {
  //     this.chart.data.datasets[0].data = this.votes; // Atualiza os dados do gráfico
  //     this.chart.update(); // Atualiza o gráfico
  //   }

  //   // Recrie o gráfico com os novos dados
  //   this.chart = new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //       labels: this.sports,
  //       datasets: [{
  //         label: 'Votos',
  //         data: this.votes,
  //         backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //         borderColor: 'rgba(75, 192, 192, 1)',
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         x: {
  //           type: 'category',
  //           title: {
  //             display: true,
  //             text: 'Esportes'
  //           }
  //         },
  //         y: {
  //           title: {
  //             display: true,
  //             text: 'Número de Votos'
  //           }
  //         }
  //       }
  //     }
  //   });
  // }
}
