// ✅ 1. window.onload
window.onload = function () {
    console.log("Page fully loaded.");
  };
  
  // ✅ 2. DOM Level 0 Event
  const dom0Btn = document.getElementById("dom0Btn");
  dom0Btn.onclick = function () {
    alert("Clicked DOM Level 0 Button");
  };
  
  // ✅ 3. addEventListener() and removeEventListener()
  const addBtn = document.getElementById("addBtn");
  
  function showMessage() {
    alert("Hello from addEventListener!");
    // Remove listener after one use
    addBtn.removeEventListener("click", showMessage);
  }
  
  addBtn.addEventListener("click", showMessage);
  
  // ✅ 4. Event Object
  const input = document.getElementById("textInput");
  input.addEventListener("keydown", function (event) {
    console.log(`Key pressed: ${event.key}`);
  });
  
  // ✅ 5. Event Bubbling & Capturing
  const parent = document.getElementById("parent");
  const child = document.getElementById("child");
  
  // Bubbling (default)
  parent.addEventListener("click", () => {
    console.log("Parent clicked - BUBBLING");
  });
  
  // Capturing (set to true)
  parent.addEventListener(
    "click",
    () => {
      console.log("Parent clicked - CAPTURING");
    },
    true
  );
  
  // Child Button
  child.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevents bubbling
    alert("Child button clicked!");
  });
  