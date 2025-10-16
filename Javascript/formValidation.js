// Handle form submit
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent reload

  if (validateForm()) {
    // Check inputs
    let total = calculateTotal(); // Calculate total
    console.log("Name:", document.getElementById("name").value);
    console.log("Email:", document.getElementById("email").value);
    console.log(
      "Contact Method:",
      document.querySelector('input[name="contactMethod"]:checked')?.value
    );
    console.log("Items purchased:", getCheckedItems());
    console.log("Quantity:", document.getElementById("quantity").value);
    console.log("Message:", document.getElementById("message").value);
    console.log("Total price: $" + total);
  } else {
    return; // Stop execution
  }
}

// Validate form inputs
function validateForm() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");

  if (name.value.trim() === "") {
    alert("Name field empty!");
    name.focus();
    return false;
  }

  if (email.value.trim() === "") {
    alert("Email field empty!");
    email.focus();
    return false;
  }

  return true;
}

// Calculate total price
function calculateTotal() {
  let total = 0;
  let items = document.querySelectorAll('input[type="checkbox"]:checked');
  items.forEach(function (item) {
    total += Number(item.value);
  });

  let quantity = Number(document.getElementById("quantity").value);
  total *= quantity;

  return total;
}

// Get checked items
function getCheckedItems() {
  let items = document.querySelectorAll('input[type="checkbox"]:checked');
  let names = [];
  items.forEach(function (item) {
    names.push(item.nextElementSibling.innerText);
  });
  return names.join(", ");
}

// Form event listener
document
  .getElementById("contactForm")
  .addEventListener("submit", handleFormSubmit);
