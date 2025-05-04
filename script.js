//your JS code here. If required.
const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("Reset");

changeBtn.addEventListener("click", () => {
  // Reset all grid colors
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }

  // Get input values
  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  // Change color of the specified block
  const targetBlock = document.getElementById(blockId);
  if (targetBlock) {
    targetBlock.style.backgroundColor = color;
  }
});

resetBtn.addEventListener("click", () => {
  // Reset all grid colors
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }
});
