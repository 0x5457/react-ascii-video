
export async function calcVideoOffsetSize(video: HTMLVideoElement): Promise<{ height: number, width: number }> {
  return new Promise<{ height: number, width: number }>((resolve, reject) => {
    const onLoadedMetaDate: () => void = () =>  {
      const { offsetWidth, offsetHeight } = video;
      document.body.removeChild(video);
      video.removeEventListener('loadedmetadata', onLoadedMetaDate);
      resolve({
        height: offsetHeight,
        width: offsetWidth,
      });
    }
    document.body.appendChild(video);
    video.addEventListener('loadedmetadata', onLoadedMetaDate);
  });
}