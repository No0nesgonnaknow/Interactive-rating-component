 // Get the rating state and thank you state elements
 const ratingState = document.querySelector('.rating-state');
 const thankyouState = document.querySelector('.thankyou-state');

 // Hide the thank you state initially
 thankyouState.style.display = 'none';

 // Get the submit button element
 const submitButton = document.querySelector('.btn-submit');

 // Get the rating buttons
 const ratingButtons = document.querySelectorAll('.btn');

 // Store the selected rating
 let selectedRating = 1;

 // Add a click event listener to the rating buttons
 ratingButtons.forEach(button => {
   button.addEventListener('click', () => {
     // Update the selected rating
     selectedRating = parseInt(button.textContent);

     // Update the value of the selected-rating span
     const selectedRatingSpan = document.querySelector('#selected-rating');
     selectedRatingSpan.textContent = selectedRating.toString();
   });
 });

 // Add a click event listener to the submit button
 submitButton.addEventListener('click', () => {
   // Hide the rating state
   ratingState.style.display = 'none';

   // Show the thank you state
   thankyouState.style.display = 'block';

   // Update the rated statement
   const ratedStatement = document.querySelector('#rated-statement');
   ratedStatement.innerHTML = `You selected <span id="selected-rating" style="display: inline-block; margin: 0 0.3rem">${selectedRating}</span> out of 5`;
 });

 // Add click event listener to the submit button
 submitButton.addEventListener('click', () => {
    // Hide the rating state
    ratingState.style.display = 'none';
    // Show the thankyou state
    thankyouState.style.display = 'flex';
  });