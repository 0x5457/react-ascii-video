export async function calcVideoOffsetSize(video: HTMLVideoElement): Promise<{ height: number, width: number }> {
  return new Promise<{ height: number, width: number }>((resolve, reject) => {
    document.body.appendChild(video);
    video.addEventListener('loadedmetadata', () => {
      const { offsetWidth, offsetHeight } = video;
      document.body.removeChild(video);
      resolve({
        height: offsetHeight,
        width: offsetWidth,
      });
    })
  });
}