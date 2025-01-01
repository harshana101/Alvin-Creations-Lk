function performSearch() {
    var input = document.getElementById('searchBar').value; 
    alert('You searched for: ' + input);
}

const searchBar = document.getElementById('searchBar');
const resultsList = document.getElementById('results');
const items = resultsList.querySelectorAll('li');

searchBar.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();

  items.forEach(item => {
    const name = item.dataset.name.toLowerCase();
    if (name.includes(query)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});

