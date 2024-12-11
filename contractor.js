function displayUploadedItems() {
    const uploadedItems = JSON.parse(localStorage.getItem('uploadedItems')) || [];
    const uploadedItemsDisplay = document.getElementById("uploadedItemsDisplay");

    uploadedItemsDisplay.innerHTML = ""; // Clear previous content

    uploadedItems.forEach(item => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productImage = document.createElement("img");
        productImage.src = item.image;
        productImage.alt = item.name;

        const productName = document.createElement("h3");
        productName.textContent = item.name;

        const productPrice = document.createElement("p");
        productPrice.textContent = `₹${item.price}`;

        productDiv.appendChild(productImage);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);

        uploadedItemsDisplay.appendChild(productDiv);
    });
}

window.onload = displayUploadedItems;
