import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

//Avoid a specific word. This function does not take a parameter.
export function avoidWord(fc: AbstractControl){
    let notAllowed = /hacker/.test(fc.value); //fc represents our form control. fc.value represents the value of the form control

    if(notAllowed){
        return {
            prohibited: {value: fc.value}
        }
    }else {
        return null;
    }
}

//Avoid any word defined through the parameter variable. This function takes a parameter.
export function prohibited(reg:RegExp) : ValidatorFn{ //Regular expression is used to search
    return (fc:AbstractControl) : ValidationErrors | null => {
        let notAllowed = reg.test(fc.value.toLowerCase());

        if(notAllowed){
            return {
                prohibited: {value: fc.value}
            };
        }
        else{
            return null;
        }
    }
}