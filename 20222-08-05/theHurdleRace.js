function hurdleRace(k, height) {
  // Write your code here
  // how many doses of the potion must the player take to jump all hurdles
      // if character can already jump all hurdles return 0
  //k: character jumps
  //height: array of hurdle heights
  
  height.sort((a,b) => b-a)
  
  for (let i = 0; i < height.length; i++) {
      if (k >= height[0]) return 0;
      return height[0] - k
  }
}