export const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    try {
      // Attempt to retrieve timeslots for the given date from localStorage
      // const savedTimeslots = localStorage.getItem(date);
      let times = JSON.parse(
        localStorage.getItem(`availableTimesByDate_${date}`)
      );

      if (times && times.length > 0) {
        // If timeslots are available, resolve with the times array
        setTimeout(() => resolve(times), 1000); // Simulate API call delay
      } else if (times && times.length === 0) {
        // If timeslots exist but the array is empty, indicate no available timeslots
        setTimeout(() => resolve("No available timeslots"), 1000);
      } else {
        // If no timeslots are set for the given date, generate new timeslots
        const newTimes = generateNewTimeslots();
        localStorage.setItem(`availableTimesByDate_${date}`, JSON.stringify(newTimes));
        setTimeout(() => resolve(newTimes), 1000);
      }
    } catch (error) {
      reject(error);
    }
  });
};

// Utility function to generate new timeslots
function generateNewTimeslots() {
  const startHour = 18; // Starting at 18:00
  const endHour = 22; // Including 22:00
  const totalHalfHours = (endHour - startHour) * 2 + 1;
  const numberOfSlots = Math.floor(Math.random() * (6 - 4 + 1)) + 4; // Generate between 4 and 6 slots

  let uniqueBlocks = new Set();
  while (uniqueBlocks.size < numberOfSlots) {
    const randomBlock = Math.floor(Math.random() * totalHalfHours);
    uniqueBlocks.add(randomBlock);
  }

  let times = Array.from(uniqueBlocks).map((block) => {
    const hour = startHour + Math.floor(block / 2);
    const minute = (block % 2) * 30; // 0 or 30 minutes
    return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
  });

  return times.sort(); // Return sorted timeslots
}

export const submitAPI = (formData) => {
  const { date, time } = formData;
  // Retrieve the current timeslots for the given date
  const availableTimeslots = JSON.parse(localStorage.getItem(`availableTimesByDate_${date}`) || "[]" );

  //Filter out the selected time
  const updateAvailableTimeslots = availableTimeslots.filter((t) => t !== time);

  // Update localStorage with the new set of timeslots
  localStorage.setItem(
    `availableTimesByDate_${date}`,
    JSON.stringify(updateAvailableTimeslots)
  );

  // Retrieve the current reserved timeslots for the given date
  let reservedTimeslots = JSON.parse(
    localStorage.getItem(`reservedTimesByDate_${date}`) || "[]"
  );
  // Add the selected time to the reserved timeslots
  reservedTimeslots.push(time);
  // Update localStorage with the new set of reserved timeslots
  localStorage.setItem(
    `reservedTimesByDate_${date}`,
    JSON.stringify(reservedTimeslots)
  );

  return true;
};
