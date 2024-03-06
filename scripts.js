document.addEventListener("DOMContentLoaded", function () {
  // Hide the loading page
  document.getElementById("loading-page").style.display = "none";

  // Show the content
  document.getElementById("content").style.display = "block";

  // Animation for the invitation card
  animateInvitationCard();
});

function animateInvitationCard() {
  var invitationCard = document.getElementById("invitation-card");

  // Check if the invitation card element exists
  if (invitationCard) {
    // Add a class to trigger the fadeIn animation
    invitationCard.classList.add("fadeIn");

    // Add additional animations or effects
    invitationCard.addEventListener("mouseover", function () {
      // Add a scale effect when hovering over the card
      invitationCard.style.transform = "scale(1.05)";
      invitationCard.style.transition = "transform 0.3s ease";
    });

    invitationCard.addEventListener("mouseout", function () {
      // Revert back to original scale when mouse leaves the card
      invitationCard.style.transform = "scale(1)";
      invitationCard.style.transition = "transform 0.3s ease";
    });
  }
}
