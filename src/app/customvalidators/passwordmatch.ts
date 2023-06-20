import { AbstractControl } from "@angular/forms";

 export function passwordMatch(password:string,confirmpassword:string){

   return function(form:AbstractControl){
        const passwordValue = form.get(password)?.value
        const confirmPassword = form.get(confirmpassword)?.value

        if(passwordValue === confirmPassword){
            return null;
        }
        return {passwordMismatchError: true}
    }
}
