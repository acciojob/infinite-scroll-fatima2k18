//your code here!
const list = document.getElementById("infi-list");

// Start with 10 default list items
let count = 10;
for (let i = 1; i <= count; i++) {
  addListItem(i);
}

// Add scroll listener
window.addEventListener("scroll", () => {
  // Check if user scrolled to bottom
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Add 2 more items
    for (let i = 0; i < 2; i++) {
      count++;
      addListItem(count);
    }
  }
});

// Function to add a new <li> element
function addListItem(num) {
  const li = document.createElement("li");
  li.textContent = `List Item ${num}`;
  list.appendChild(li);
}
