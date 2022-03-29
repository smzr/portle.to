module.exports = {
  // Returns current year (for use in footer)
  currentYear() {
    const today = new Date();
    return today.getFullYear();
  }
};