// Function to scroll to the features section when the "Learn More" button is clicked
function scrollToFeatures() {
  const featuresSection = document.querySelector('.features');
  featuresSection.scrollIntoView({ behavior: 'smooth' });
}

// Array of product features (you can add more)
const productFeatures = [
  { title: 'Feature 1', description: 'Description of feature 1.' },
  { title: 'Feature 2', description: 'Description of feature 2.' },
  { title: 'Feature 3', description: 'Description of feature 3.' }
];

// Function to dynamically generate feature cards
function generateFeatureCards() {
  const featuresSection = document.querySelector('.features');
  productFeatures.forEach(feature => {
      const featureCard = document.createElement('div');
      featureCard.classList.add('feature');
      featureCard.innerHTML = `
          <h3>${feature.title}</h3>
          <p>${feature.description}</p>
      `;
      featuresSection.appendChild(featureCard);
  });
}

// Call the function to generate feature cards when the page loads
window.onload = generateFeatureCards;
