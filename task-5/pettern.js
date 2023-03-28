for (let i = 1; i <= 6; i++) {
  let row = "";
  for (let j = i; j <= 6; j++) {
    if (i === 1 || j === i || j === 6) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}
