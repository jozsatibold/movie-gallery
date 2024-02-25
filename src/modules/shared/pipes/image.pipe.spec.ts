import { ImagePipe } from '@shared/pipes/image.pipe';

describe('ImagePipe', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new ImagePipe();

  it('transforms "imagePath" to link', () => {
    expect(pipe.transform('imagePath')).toBe('https://image.tmdb.org/t/p/w500/imagePath.jpg');
  });
});
