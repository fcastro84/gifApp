import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent {

  constructor( private gifsService: GifsService){}

  buscar( termino: string){

   this.gifsService.buscarGifs( termino );
  }

  get historial(){
    return this.gifsService.historial;
  }

}
