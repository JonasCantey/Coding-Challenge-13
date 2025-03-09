//Task 2: Adding Employee Cards Dynamically

const dashboard = document.querySelector("#employeeContainer"); //Find the container to create metric cards


//Populate card with title and placeholder value
function createEmployeeCard (name, position) { //function to create metric cards using name and position
   const employeeCard = document.createElement("div");  //creates the metric  card

    employeeCard.setAttribute("id","employeeCard"); //setting attributes:
    employeeCard.setAttribute("class", "metric-card"); //setting attributes:
    
    //Populate card with title and placeholder value
    employeeCard.innerHTML =    //defining what html was in the employee cards
    `<h2>${name}</h2><p>${position}</p>`    //this is saying what content goes in the employee card
    dashboard.appendChild(employeeCard);    //this appends the metric card to the dashboard
    
        const removeButton = document.createElement('Button'); //creating a remove button
        removeButton.innerHTML = 'Remove'; //inside the remove button is the word remove
        employeeCard.appendChild(removeButton); //this appends the remove button to the employee card
            removeButton.addEventListener('click', () => { //basically says that on click we will remove the 
                dashboard.removeChild(employeeCard);        //employeeCard from the dashboard
            });
    
}

createEmployeeCard("Mark Dangle", "Junior Analyst");
createEmployeeCard("Lebron James", "Baller");
createEmployeeCard("Ike Turner", "HR rep");
        
