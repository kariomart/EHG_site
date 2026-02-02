// Load the gallery data from the JSON file
fetch('projectInfo.json')
  .then(response => response.json())
  .then(data => {
    // Get the gallery container element
    const galleryContainer = document.querySelector('.gallery');

    // Loop through the gallery data and create the HTML elements
    data.forEach(item => {
      // Create the gallery item div
      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');

      // Create the link element
      const link = document.createElement('a');

      // Check if the link field is not empty
      if (item.link) {
        link.href = item.link; // Set the link based on the data
        link.target = "_blank"; // Add this line to open in new tab
      } else {
        link.style.pointerEvents = 'none'; // Disable link interactivity
      }

      // Create the image element
      const image = document.createElement('img');
      image.src = item.imageSrc;

      // Create the title element
      const title = document.createElement('h2');
      title.textContent = item.title;
      title.style.color = item.titleColor;

      // Append the elements to the gallery item
      link.appendChild(image);
      galleryItem.appendChild(link);
      galleryItem.appendChild(title);

      // Append the gallery item to the container
      galleryContainer.appendChild(galleryItem);
    });
  })
  .catch(error => {
    console.error('Error loading gallery data:', error);
  });