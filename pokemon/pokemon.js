document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  const toggleButton = document.getElementById('toggleView');
  const blogView = document.getElementById('blogView');
  const pokedexView = document.getElementById('pokedexView');

  // Initialize the blog view to be visible and the Pokedex view to be hidden
  blogView.style.display = 'block';
  pokedexView.style.display = 'none';

  // Add event listener for the toggle button
  toggleButton.addEventListener('click', function() {
    if (blogView.style.display === 'none') {
      // If the blog view is hidden, show it and hide the Pokedex view
      blogView.style.display = 'block';
      pokedexView.style.display = 'none';
    } else {
      // If the blog view is visible, hide it and show the Pokedex view
      blogView.style.display = 'none';
      pokedexView.style.display = 'block';
      populateRoutes();  // Populate the Pokedex view
    }
  });
});

// Function to populate the Pokedex view based on the locationDatabase and pokemonDatabase
function populateRoutes() {
  const routesDiv = document.getElementById('routes');
  routesDiv.innerHTML = '';  // Clear previous content

  // Loop through each route in the locationDatabase
  for (const route in locationDatabase) {
    const routeDiv = document.createElement('div');
    routeDiv.className = 'route';
    
    // Create a div for the route title with a background image
    const routeTitle = document.createElement('div');
    routeTitle.className = 'route-title';
    routeTitle.textContent = route;
    routeTitle.style.backgroundImage = 'url("https://cdn.discordapp.com/attachments/429983945786916884/1149390563246886963/DS_DSi_-_Pokemon_Platinum_-_Text_Box_Styles_1.png")';  // Replace with your image path
    routeDiv.appendChild(routeTitle);

    // Create a div for the Pokémon list
    const pokemonListDiv = document.createElement('div');
    pokemonListDiv.className = 'pokemon-list';

    // Loop through each Pokémon found in the current route
    for (const pokemon of locationDatabase[route]) {
      const img = document.createElement('img');
      img.src = pokemonDatabase[pokemon];  // Get the image source from pokemonDatabase
      img.alt = pokemon;
      img.className = 'pokemon';
      pokemonListDiv.appendChild(img);
    }

    routeDiv.appendChild(pokemonListDiv);
    routesDiv.appendChild(routeDiv);
  }
}


document.addEventListener('DOMContentLoaded', function() {
  const sprites = document.querySelectorAll('.pokemon-image');

  sprites.forEach(function(sprite) {
    const pokemonName = sprite.getAttribute('data-pokemon');
    if (pokemonDatabase[pokemonName]) {
      sprite.src = pokemonDatabase[pokemonName];
    } else {
      console.warn(`No sprite found for ${pokemonName}`);
    }
  });
});
