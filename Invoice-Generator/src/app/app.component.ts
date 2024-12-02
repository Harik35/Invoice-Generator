import { NgFor } from '@angular/common';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { PreviewComponentComponent } from './preview-component/preview-component.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
	imports: [PreviewComponentComponent]
})
export class AppComponent implements OnInit {
	selectedFile: File | null = null;


	constructor(
		private viewContainerRef: ViewContainerRef
	) { }

	ngOnInit() { }

	openFilePicker(): void {
		const fileInput = document.createElement('input');
		fileInput.type = 'file';
		fileInput.accept = 'application/pdf';

		fileInput.onchange = (event: Event) => {
			const input = event.target as HTMLInputElement;
			if (input.files && input.files.length > 0) {
				this.selectedFile = input.files[0];
				console.log('Selected file:', this.selectedFile.name);
			}
		};

		fileInput.click();
	}

	uploadFile(): void {
		if (this.selectedFile) {
			const formData = new FormData();
			formData.append('file', this.selectedFile, this.selectedFile.name);
		}
	}
}
