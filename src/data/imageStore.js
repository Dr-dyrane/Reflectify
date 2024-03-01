// data/imageStore.js

const IMAGE_STORE_KEY = "entryImageData";

const ImageStore = {
    // Create a new image entry
    createImage: (imageData) => {
      let existingImageData = JSON.parse(localStorage.getItem(IMAGE_STORE_KEY)) || [];
      const newKey = Date.now().toString(); // Unique key for the image entry
      existingImageData.push({ key: newKey, data: imageData });
      localStorage.setItem(IMAGE_STORE_KEY, JSON.stringify(existingImageData));
      return newKey;
    },
    
    // Read all image entries
    readAllImages: () => {
      return JSON.parse(localStorage.getItem(IMAGE_STORE_KEY)) || [];
    },
    
    // Update an image entry
    updateImage: (key, updatedImageData) => {
      let existingImageData = JSON.parse(localStorage.getItem(IMAGE_STORE_KEY)) || [];
      const index = existingImageData.findIndex((item) => item.key === key);
      if (index !== -1) {
        existingImageData[index].data = updatedImageData;
        localStorage.setItem(IMAGE_STORE_KEY, JSON.stringify(existingImageData));
        return true;
      }
      return false;
    },
    
    // Delete an image entry
    deleteImage: (key) => {
      let existingImageData = JSON.parse(localStorage.getItem(IMAGE_STORE_KEY)) || [];
      const filteredImageData = existingImageData.filter((item) => item.key !== key);
      localStorage.setItem(IMAGE_STORE_KEY, JSON.stringify(filteredImageData));
    },
  };
  
  export default ImageStore;
  