import { Component, HostListener } from '@angular/core';

interface Imagem {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-anderson-e-giovanna',
  templateUrl: './anderson-e-giovanna.component.html',
  styleUrls: ['./anderson-e-giovanna.component.scss']
})
export class AndersonEGiovannaComponent {
  imagens: Imagem[] = [];
  isFullscreenOpen: boolean = false;
  fullscreenImageSrc: string = '';
  activeImageIndex: number = 0;

  //centraliza as fotos que não são 9:16
  isCentered: boolean = true;

  //alinhar miniaturas
  alignThumbnails: boolean = false;

  //deixa as thumbs de mesmo tamanho
  isThumbnailZoomed: boolean = false;

  constructor() {
    for (let i = 1; i <= 45; i++) {
      const src = `assets/photos/pre-wedding/anderson-e-giovanna/Dream Weddings - Anderson e Giovanna (${i}).jpg`;
      const alt = `Dream Weddings - Anderson e Giovanna ${i}`;
      this.imagens.push({ src, alt });
    }
  }

  openFullscreen(imageSrc: string, index: number) {
    this.fullscreenImageSrc = imageSrc;
    this.activeImageIndex = index;
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      const imageWidth = image.width;
      const imageHeight = image.height;
      const imageAspectRatio = imageWidth / imageHeight;
      this.isFullscreenOpen = true;
    };
  }

  closeFullscreen(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const isOverlayClicked = target.id === 'fullscreen-overlay';
    if (isOverlayClicked) {
      this.isFullscreenOpen = false;
      this.isCentered = true;
    }
  }

  closeFullscreenWithButton() {
    this.isFullscreenOpen = false;
    this.isCentered = true;
  }

  changeImage(index: number) {
    this.activeImageIndex = index;
    this.fullscreenImageSrc = this.imagens[index].src;
    this.alignThumbnails = true; // Define a classe para alinhar as miniaturas
    this.isThumbnailZoomed = true;
  }

  nextImage() {
    if (this.activeImageIndex < this.imagens.length - 1) {
      this.activeImageIndex++;
      this.fullscreenImageSrc = this.imagens[this.activeImageIndex].src;
    }
  }

  previousImage() {
    if (this.activeImageIndex > 0) {
      this.activeImageIndex--;
      this.fullscreenImageSrc = this.imagens[this.activeImageIndex].src;
    }
  }

  //deixa as thumbnails em 9:16
  isNineSixteenRatio(imageSrc: string): boolean {
    const image = new Image();
    image.src = imageSrc;
    const imageAspectRatio = image.width / image.height;
    return imageAspectRatio === 9 / 16;
  }


  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.isFullscreenOpen = false;
    } else if (this.isFullscreenOpen) {
      if (event.key === 'ArrowLeft') {
        this.previousImage();
      } else if (event.key === 'ArrowRight') {
        this.nextImage();
      }
    }
  }

}
