import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent {

  countries: Country[] = [];

  countriesService = inject(CountriesService);

  searchByCapital( term: string){
    this.countriesService.searchCapital( term )
        .subscribe( countries => this.countries = countries );

  }
}
