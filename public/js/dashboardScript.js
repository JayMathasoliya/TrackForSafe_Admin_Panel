const table = document.getElementById("userTable");

fetch('/getUserData')
    .then(response => response.json())
    .then(data => {
        const userData = data;
        console.log(userData);

        // Iterate over each user in the data
        for (let userId in userData) {
            if (userData.hasOwnProperty(userId)) {
                const user = userData[userId];
                const row = table.insertRow();

                // Create a cell for the user's name and city
                const cell = row.insertCell();
                const h4 = document.createElement('h4');
                h4.innerHTML = `${user.Name}<br><span>${user.City}</span>`;
                cell.appendChild(h4);
            }
        }
    });