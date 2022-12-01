// UI elements
const movieSelect = document.getElementById("movie"),
  container = document.querySelector(".container"),
  seats = document.querySelectorAll(".row .seat:not(.occupied)"),
  count = document.getElementById("count"),
  total = document.getElementById("total");

let ticketPrice = +movieSelect.value;

// Movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

seats.forEach((seat) => {
  seat.addEventListener("click", (e) => {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  });
});
