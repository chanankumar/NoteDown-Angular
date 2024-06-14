import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {

  @ViewChild('autoResizeTextarea') textarea!: ElementRef<HTMLTextAreaElement>;


  ngAfterViewInit(): void {
    this.adjust();
  }

  onInput(): void {
    this.adjust();
  }

  private adjust(): void {
    const textarea = this.textarea.nativeElement;
    textarea.style.overflow = 'hidden';
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  } 
  
}

