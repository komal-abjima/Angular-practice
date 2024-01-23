import { Directive, HostBinding, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]'

})
export class DropdownDirective{
    @HostBinding('class.open') isOpen = false;

    // this will close the dropdown by using only click on the dropdown
    // @HostListener('click') toggleOpen(){
    //     this.isOpen = !this.isOpen;
    // }


    // this will close the dropdown from all the dom
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }
      constructor(private elRef: ElementRef) {}
    

}