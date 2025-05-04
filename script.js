document.getElementById("change_button").addEventListener("click", () => {
  // Reset all grid items
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }

  const blockId = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  const block = document.getElementById(blockId);
  if (block) {
    block.style.backgroundColor = color;
  }
});

document.getElementById("reset_button").addEventListener("click", () => {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }
});
