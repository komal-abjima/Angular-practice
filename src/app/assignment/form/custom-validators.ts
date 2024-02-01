import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators{
    static invalidProjectName(control: FormControl): {[s:string]: boolean}{
        if(control.value === 'Test'){
            return {'InvalidProjectName': true}
        }
        return null;
    }

    static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any>{
        const promise = new Promise((resolve, reject)=>{
            setTimeout(() => {
                if(control.value === 'TesterProject'){
                    resolve({'InvalidProjectName': true})
                }
                else{
                    resolve(null)
                }
            }, 1000);
        })
        return promise;
    }
}