document.addEventListener("DOMContentLoaded", () => {
  const productName = "Baby Bear Pajamas";

  fetch("products.xml")
    .then((response) => response.text())
    .then((xmlString) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlString, "text/xml");

      const products = xmlDoc.querySelectorAll("product");

      products.forEach((product) => {
        const nameElement = product.querySelector("name");
        const availabilityElement = product.querySelector("availability");

        if (nameElement.textContent === productName) {
          const availability = availabilityElement.textContent;
          const addToCartButton = document.getElementById("addToCartButton");

          if (availability === "out_of_stock") {
            addToCartButton.classList.add("disabled");
            addToCartButton.textContent = "Out of Stock";
          }
        }
      });
    })
    .catch((error) => console.error("Error fetching XML:", error));
});
