// api/ImageApi.js
import ImageStore from "../data/imageStore";

const ImageApi = {
  createImage: (imageData) => {
    return ImageStore.createImage(imageData);
  },
  
  readAllImages: () => {
    return ImageStore.readAllImages();
  },
  
  updateImage: (key, updatedImageData) => {
    return ImageStore.updateImage(key, updatedImageData);
  },
  
  deleteImage: (key) => {
    return ImageStore.deleteImage(key);
  },
};

export default ImageApi;
