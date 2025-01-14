// Cargar datos del archivo JSON y renderizar el Top 10
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const list = document.getElementById('top10-list');
        data.forEach((user, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${index + 1}. <a href="${user.link}" target="_blank">${user.name}</a></strong> - ${user.score} pts`;
            list.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error loading data:', error));
