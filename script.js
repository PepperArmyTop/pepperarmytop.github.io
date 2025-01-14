fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('top10-list');
        data.sort((a, b) => b.score - a.score); // Ordenar por puntaje (mayor puntaje primero)
        
        data.forEach((user, index) => {
            const listItem = document.createElement('li');
            const medalsHTML = user.medals.map(medal => `<img src="medals/${medal}.png" alt="${medal} medal" class="medal-icon">`).join('');
            
            listItem.innerHTML = `
                <strong>${index + 1}. <a href="${user.link}" target="_blank">${user.name}</a></strong> - ${user.score} pts
                ${medalsHTML}
            `;
            list.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error loading data:', error));
