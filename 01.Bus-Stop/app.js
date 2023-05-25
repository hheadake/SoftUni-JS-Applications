async function getInfo() {
    
  

        const stopId = document.getElementById('stopId').value;
        const stopName = document.getElementById('stopName');
        const timeTable = document.getElementById('buses');
        const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;


        try {
            const response = await fetch(url);
            const data = await response.json();
            timeTable.replaceChildren();
            stopName.textContent = data.name;
    
            if (response.status !== 200) {
                alert('StopId not found');
            }

            Object.entries(data.buses).forEach(bus => {

                const liElement = document.createElement('li');
                liElement.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
                timeTable.appendChild(liElement);
            })

        } catch(error) { 

            stopName.textContent = 'Error';

        }




    









}