const countdownElem = document.getElementById("countdown");
const eventDate = new Date("2023-06-03T08:00:00-04:00");
let x = 0;
let y = 0;
let dx = 2;
let dy = 2;

function updateCountdown() {
  const now = new Date();
  const remainingTime = eventDate - now;
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  countdownElem.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (remainingTime < 0) {
    clearInterval(countdownInterval);
    countdownElem.textContent = "Event has started!";
  }
}

function bounceCountdown() {
  const maxWidth = window.innerWidth - countdownElem.offsetWidth;
  const maxHeight = window.innerHeight - countdownElem.offsetHeight;

  x += dx;
  y += dy;

  if (x < 0 || x > maxWidth) {
    dx = -dx;
  }
  if (y < 0 || y > maxHeight) {
    dy = -dy;
  }

  x = Math.min(Math.max(x, 0), maxWidth);
  y = Math.min(Math.max(y, 0), maxHeight);

  countdownElem.style.left = x + "px";
  countdownElem.style.top = y + "px";
}


const countdownInterval = setInterval(updateCountdown, 1000);
const bounceInterval = setInterval(bounceCountdown, 20);
updateCountdown();

const bgImages = [
  'https://www.themedalist.com/images/slideshows/banner_4.jpg',
  'https://eagleeyegolfclub.com/wp-content/uploads/2019/08/Hawk_Hollow_17_green_Clubhouse.jpg',
  'https://gulllakeview.com/wp-content/uploads/2019/02/Bedford-Walker3.jpg'
];

let bgImageIndex = 0;

function changeBackgroundImage() {
  document.body.style.backgroundImage = `url("${bgImages[bgImageIndex]}")`;
  bgImageIndex = (bgImageIndex + 1) % bgImages.length;
}

changeBackgroundImage(); // Set the initial background image
setInterval(changeBackgroundImage, 5000); // Change the background image every 5 seconds

// Add this code at the end of your scripts.js
const golfClubPoll = document.getElementById('golfClubPoll');
const voteCountList = document.getElementById('voteCountList');

// Initialize the vote count object
const voteCounts = {
  "Shepherd's Hollow Golf Club": 0,
  "The Orchards Golf Club": 0,
  "Tanglewood Golf Club": 0,
  "Eagle Eye Golf Club": 0,
  "The Majestic at Lake Walden": 0,
  // Add more options as needed
};

function updateVoteCount() {
  voteCountList.innerHTML = '';
  for (const option in voteCounts) {
    const li = document.createElement('li');
    li.textContent = `${option}: ${voteCounts[option]}`;
    voteCountList.appendChild(li);
  }
}

golfClubPoll.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  const selectedOption = document.querySelector('input[name="golfClub"]:checked');
  if (selectedOption) {
    voteCounts[selectedOption.value]++;
    updateVoteCount();
    alert(`You have voted for: ${selectedOption.value}`);
  } else {
    alert('Please select an option before voting.');
  }
});

// Display the initial vote count
updateVoteCount();

