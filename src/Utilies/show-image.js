const base64ToImage = (base64) => {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return URL.createObjectURL(new Blob([bytes], { type: 'image/jpeg' }));
};

export default base64ToImage;