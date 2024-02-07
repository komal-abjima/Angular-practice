import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    'name': 'shortern'
})
export class ShorternPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        if(value.length > 10){
            return value.substr(0,10) + '...';
        }
        else{
            return value;
        }
        
    }
}