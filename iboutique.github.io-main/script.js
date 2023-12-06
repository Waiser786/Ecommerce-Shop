document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search');
  const autocomplete = document.getElementById('suggestions');

  searchInput.addEventListener('input', function () {
    const query = searchInput.value.trim().toLowerCase();

    if (query.length === 0) {
      autocomplete.innerHTML = '';
      return;
    }

    fetch('products.xml')
      .then(response => response.text())
      .then(xmlString => {
        
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

        const products = xmlDoc.querySelectorAll('product');

        autocomplete.innerHTML = '';

        products.forEach(product => {
          
          const productName = product.querySelector('name').textContent;

          if (productName.toLowerCase().includes(query)) {
            
            const item = document.createElement('div');
            item.classList.add('autocomplete-item');
            item.textContent = productName;

            item.addEventListener('click', function () {
              
              searchInput.value = productName;

              autocomplete.innerHTML = '';
            });

            autocomplete.appendChild(item);
          }
        });
      })
      .catch(error => console.error('Error fetching XML:', error));
  });
});
