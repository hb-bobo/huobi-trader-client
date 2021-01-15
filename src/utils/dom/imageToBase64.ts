/**
 * image to base64
 * @param image
 */
export default function imageToBase64(image: HTMLImageElement): string {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.drawImage(image, 0, 0, image.width, image.height);
        return canvas.toDataURL('image/png');
    }
    throw Error('ctx 获取失败');
}
