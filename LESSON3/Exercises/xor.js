function isXor(one, two) {
  if (one && !two) {
    return true;
  } else if (!one && two) {
    return true;
  } else {
    return false;
  }
}