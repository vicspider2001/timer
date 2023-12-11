const timer = function() {
  // Start from index 2 as index 0 is 'node' and index 1 is the script name
  let userInput = process.argv.slice(2);

  // Check if there are no valid inputs
  if (userInput.length === 0 || userInput.some(time => isNaN(time) || time < 0)) {
    console.log("Invalid input. Please provide positive numbers for timers.");
    return;
  }

  let interval = 1000;

  userInput.forEach(time => {
    let numFormat = parseInt(time);
    setInterval(() => {
      process.stdout.write('\x07');
    }, interval * numFormat);
  });
};

timer();
