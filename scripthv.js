// Function to handle form submission
document.getElementById('recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const recommendationText = document.getElementById('recommendation-text').value;
    const recommendationPerson = document.getElementById('recommendation-person').value;

    if (recommendationText && recommendationPerson) {
        // Task 9: Show a pop-up confirmation dialogue
        if (confirm("¿Estás seguro de que quieres enviar esta recomendación?")) {
            // Task 7: Add the new recommendation to the existing list
            addRecommendation(recommendationText, recommendationPerson);
            
            // Clear the form fields
            document.getElementById('recommendation-text').value = '';
            document.getElementById('recommendation-person').value = '';
        }
    } else {
        alert("Please fill in both fields.");
    }
});

// Function to dynamically add a new recommendation to the DOM
function addRecommendation(text, person) {
    const listContainer = document.getElementById('recommendations-list');
    const newRecommendation = document.createElement('div');
    newRecommendation.classList.add('recommendation');
    
    // Format the new recommendation structure
    newRecommendation.innerHTML = `
        <p>"${text}"</p>
        <span>— ${person}</span>
    `;
    
    listContainer.appendChild(newRecommendation);
}
