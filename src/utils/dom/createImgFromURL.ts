// import { fabric } from 'fabric';

// 是否需要设置图片的跨域设置
function isShouldCross() {
    const origin = window.location.origin;
    return origin.includes('jd.com') || origin.includes('localhost');
}

const shouldCross = isShouldCross();
/**
 * create img
 * @param url
 */
export default function createImgFromURL(url: string): Promise<HTMLImageElement> {
    return new Promise(function (resolve, reject) {
        // fabric.util.loadImage(url, function (image) {
        //     resolve(image);
        // });
        const img = new Image();
        // img.crossOrigin = 'anonymous';
        if (shouldCross) {
            img.crossOrigin = 'anonymous';
        }
        img.src = url;
        img.onload = function () {
            resolve(img);
        };
    });
}
