const hapticFeedback = () => {
  return navigator.vibrate && navigator.vibrate(50);
};

export default hapticFeedback;
