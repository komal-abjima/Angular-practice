import { AbstractControl, FormControl } from "@angular/forms";

export class CustomValidators{
    static noSpaceAllowed = (control: FormControl) =>{
        if(control.value != null && control.value.indexOf(' ') != -1){
            return {noSpaceAllowed: true}
        }
        else{
            return null;
        }

    }
    static checkUserName(control: AbstractControl): Promise<any>{
        return userNameAllowed(control.value)
    }
}

    function userNameAllowed(username: string){
    const takenUserName = ['alia', 'shivi', 'kartik121'];
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(takenUserName.includes(username)){
                resolve({checkUserName: true});
            }
            else{
                resolve(null);
            }
        }, 1000);
    })
}




// export const noSpaceAllowed = (control: FormControl) =>{
//     if(control.value != null && control.value.indexOf(' ') != -1){
//         return {noSpaceAllowed: true}
//     }
//     else{
//         return null;
//     }
// }