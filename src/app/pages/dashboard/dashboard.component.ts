import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/_service/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ciudad='';
  temperatura=0;
  humedad=0;
  temperatura2=0;
  temperaturaMax=0;
  temperaturaMin=0;
  constructor(private climaService:ClimaService) { }

  ngOnInit(): void {
  }
  mostrarClima(){
    this.climaService.obtenerClima(this.ciudad).subscribe(data=>{
      this.temperatura2=data.main.temp;
      this.temperatura = (this.temperatura2-273.15) ;
      this.humedad=data.main.humidity;
      this.temperaturaMax=data.main.temp_max-273.15;
      this.temperaturaMin=data.main.temp_min-273.15;
    });
  }

}
