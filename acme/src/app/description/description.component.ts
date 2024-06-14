import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {

  @ViewChild('autoResizeTextarea') textarea!: ElementRef<HTMLTextAreaElement>;
  inputValue: string = '';
  @Output() valueChange = new EventEmitter<string>();

  ngAfterViewInit(): void {
    this.adjust();
  }

  onInput(): void {
    this.adjust();
    this.valueChange.emit(this.inputValue);
  }

  private adjust(): void {
    const textarea = this.textarea.nativeElement;
    textarea.style.overflow = 'hidden';
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  } 
  
}

