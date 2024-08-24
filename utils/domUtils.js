document.addEventListener('DOMContentLoaded', () => {
  // Function to get all class names starting with a specific prefix
  function getClassNamesWithPrefix(prefix) {
    // Create a Set to store unique class names
    const classNames = new Set();

    // Use a regex to match class names starting with the prefix
    const regex = new RegExp(`^${prefix}`, 'i');

    // Get all elements within the body
    const allElements = document.body.querySelectorAll('*');

    // Loop through all elements
    allElements.forEach(element => {
      // Loop through the class list of each element
      element.classList.forEach(className => {
        // Check if the class name starts with the specified prefix
        if (regex.test(className)) {
          classNames.add(className);
        }
      });
    });

    // Convert the Set to an array
    return [...classNames];
  }

  // Example usage
  const classNames = getClassNamesWithPrefix('oands');
  console.log(classNames);  // Log the result to the console
});
