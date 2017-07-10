import { Directive } from '@angular/core';
import { FormGroup, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[locationValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true }],
})
export class LocationValidator implements Validator{
  validate(formGroup: FormGroup): {[key: string]: any} {
    const address = formGroup.controls.address;
    const city = formGroup.controls.city;
    const country = formGroup.controls.country;
    const locationUrl = (<FormGroup>formGroup.root).controls.onlineUrl;

    if ((address && address.value) && (city && city.value) && (country && country.value) ||
        (locationUrl && locationUrl.value)) {
      return null;
    } else {
      return { validateLocation: false };
    }

  }
}