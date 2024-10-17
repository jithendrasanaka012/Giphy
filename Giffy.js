document.getElementById('search-btn').addEventListener('click', function() {
    const query = document.getElementById('search').value;
    fetchGIFs(query);
});

function fetchGIFs(query) {
    const apiKey = 'YygRYsgtvsdj1g6l5l8TBbmT9E1W2u3i&limit=10&offset=0';  // Replace with your actual API key
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=100`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayGIFs(data.data);
        })
        .catch(error => {
            console.error('Error fetching GIFs:', error);
        });
    }

        function displayGIFs(gifs) {
        const container = document.getElementById('gif-container');
        container.innerHTML = ''; // Clear previous results

        gifs.forEach(gif => {
            const img = document.createElement('img');
            img.src = gif.images.fixed_height.url;
            container.appendChild(img);
        });
    }