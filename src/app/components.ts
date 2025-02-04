import { style } from "@angular/animations";
import { Component, ElementRef, HostBinding, inject, Input, ViewEncapsulation } from "@angular/core";

// <button class="btn d-inline-flex align-items-center align-content-center shadow-sm m-1">


@Component
({
  selector: 'alert-placeholder',
  imports: [],
  template: ''
})
export class AlertPlaceholderComponent
{
  elementRef = inject(ElementRef);
  add(message: string)
  {
    const element = document.createElement('div');
    element.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show');
    element.setAttribute("role", "alert");
    const span = document.createElement('div');
    span.textContent = message;
    const button = document.createElement('button');
    button.classList.add('btn-close');
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-dismiss", "alert");
    button.setAttribute("aria-label", "Close");
    element.replaceChildren(span, button);
    this.elementRef.nativeElement.appendChild(element);
  }
}