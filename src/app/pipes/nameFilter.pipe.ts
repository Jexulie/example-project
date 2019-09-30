import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'namefilter'
})

export class NameFilter implements PipeTransform {
    transform(value: any, input: string){
        if(input !== undefined && input.length >= 2){
            input = input.toLowerCase();
            return value.filter(function(el: any) {
                return el.owner.displayName.toLowerCase().indexOf(input) > -1;
            });
        }
        return value;
    } 
}