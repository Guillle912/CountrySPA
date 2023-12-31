import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent {

  countries: Country[] = [];

  countriesService = inject(CountriesService);

  searchByCountry( term: string){
    this.countriesService.searchCountry( term )
        .subscribe( countries => this.countries = countries );

  }
}
