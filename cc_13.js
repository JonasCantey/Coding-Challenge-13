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
            //TASK 4
            removeButton.addEventListener('click', () => { //basically says that on click we will remove the 
                dashboard.removeChild(employeeCard);        //employeeCard from the dashboard
                event.stopPropagation();    //stopProp makes it so that if you press the remove button
            });                             //then Employee Card clicked wont be logged
    
};

createEmployeeCard("Mark Dangle", "Junior Analyst");
createEmployeeCard("Lebron James", "Baller");
createEmployeeCard("Ike Turner", "HR rep");


//Task 3: Converting NodeLists to Arrays for Bulk Updates
const metricCards = document.querySelectorAll('.metric-card'); //selects all metric cards

const metricCardsArray = Array.from(metricCards);   //converts from nodelist to array

metricCardsArray.forEach((card) => {    //for each metric card in array, update by:
    card.style.backgroundColor = 'lightgreen'; //changing color of background to lightgreen
    card.style.border = '2px solid black'   //giving each card a black border
});

//Task 4

employeeContainer.addEventListener('click', () => { //added event listener which, on click, logs that
    console.log('Employee Card Clicked')    //the employee card was clicked.
});
        
