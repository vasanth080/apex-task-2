const stars = document.querySelectorAll('.star');
const ratingInput = document.getElementById('rating');

stars.forEach(star => {
  star.addEventListener('click', () => {
    let value = star.getAttribute('data-value');
    ratingInput.value = value;
    stars.forEach(s => {
      s.classList.toggle('active', s.getAttribute('data-value') <= value);
    });
  });
});

document.getElementById('feedbackForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('username').value.trim();
  const comment = document.getElementById('comment').value.trim();
  const rating = parseInt(document.getElementById('rating').value);

  if (name && comment && rating > 0) {
    const feedbackCard = document.createElement('div');
    feedbackCard.className = 'feedback-card';
    feedbackCard.innerHTML = `<strong>${name}</strong> - ${'⭐'.repeat(rating)}<br>${comment}`;
    document.getElementById('feedbackList').prepend(feedbackCard);

    this.reset();
    stars.forEach(s => s.classList.remove('active'));
    ratingInput.value = 0;
  } else {
    alert("Please fill in all fields and select a rating.");
  }
});
