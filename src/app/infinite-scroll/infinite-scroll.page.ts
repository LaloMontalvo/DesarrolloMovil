import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
  standalone: false
})
export class InfiniteScrollPage implements OnInit {
  items: string[] = []; // Inicializa la lista de elementos
  private currentIndex = 0;

  constructor() {}

  ngOnInit() {
    this.loadInitialData();
  }

  // Carga inicial de datos
  loadInitialData() {
    for (let i = 0; i < 20; i++) {
      this.items.push(`Item ${this.currentIndex + i + 1}`);
    }
    this.currentIndex += 20;
  }

  // Cargar más datos
  loadMoreData(event: any) {
    setTimeout(() => {
      const newItems = [];
      for (let i = 0; i < 10; i++) {
        newItems.push(`Item ${this.currentIndex + i + 1}`);
      }
      this.items = [...this.items, ...newItems];
      this.currentIndex += 10;

      event.target.complete();

      // Si no hay más datos para cargar
      if (this.items.length >= 100) {
        event.target.disabled = true;
      }
    }, 1000);
  }

  // Función para `trackBy`
  trackByFn(index: number, item: string): number {
    return index; // Utiliza el índice como identificador único
  }
}
