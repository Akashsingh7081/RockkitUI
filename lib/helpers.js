export function getStrapiURL(path = ''){
    //console.log("path",path);
    return `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL || 'http://localhost:1337'}${path}`;
}

export function getStrapiMedia(url) {
   // console.log("url",url);
    return getStrapiURL(url);
}
