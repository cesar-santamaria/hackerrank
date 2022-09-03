function catAndMouse(x, y, z) {
  //determine which cat will reach the mouse first
  //if cats arrive at same time, mouse escapes & cats fight
  // X: represents position of cat A
  //if cat A catches mouse => print Cat A
  // Y: represents position of cat B
  // if cat b catches mouse => print Cat B
  // z : represents position of mouse
  // if both cats reach mouse at same time => print Mouse C
  let catA = Math.abs(z - x)
  let catB = Math.abs(z - y)
  if (catA - catB === 0) {
    return 'Mouse C'
  } else if (catA < catB) {
    return 'Cat A'
  } else {
    return 'Cat B'
  }
}

// 22:00:00
