import { Component, inject } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent {
  countries: Country[] = [];

  countriesService = inject(CountriesService);

  searchByRegion( term: string){
    this.countriesService.searchRegion( term )
        .subscribe( countries => this.countries = countries );

  }
}
