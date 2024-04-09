import { CatImage } from './script.js';


document.getElementById('CatImage').addEventListener('click', async function () {
    try {
        const cat = await CatImage();
        const imageGrid = document.getElementById('image');
        image.innerHTML = ''; // Clear previous images
        const catImage = document.createElement('img');
        catImage.classList.add('cat-image');
        catImage.src = cat[0].url;
        imageGrid.appendChild(catImage);
    } catch (error) {
        console.error(error);
    }
});