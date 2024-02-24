import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'withImgUrl'
})
export class ImagePipe implements PipeTransform {
  transform(value: string): string {
    return `https://image.tmdb.org/t/p/w500/${value}.jpg`;
  }
}
