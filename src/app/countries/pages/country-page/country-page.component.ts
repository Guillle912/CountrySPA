import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css']
})
export class CountryPageComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  countriesServices = inject(CountriesService);
  router = inject(Router)

  ngOnInit(): void {
    this.activatedRoute.params.pipe(switchMap(({id})=> this.countriesServices.searchCountryByAlphaCode( id ) ))
    .subscribe( country => {
      if(!country){
        return this.router.navigateByUrl('/countries')
      }

      console.log('Hay pais');
      return

    })
  }





}
