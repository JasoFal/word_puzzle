// Utility Logic
function rngNumGen() {
  min = Math.ceil(0);
  max = Math.floor(49);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Business Logic
function randomSentenceGenerator() {
  const listArray = ["All that we are is the result of what we have thought.", "If you judge people, you have no time to love them.", "The most courageous act is still to think for yourself.", "The greatest wealth is to live content with little.", "The future belongs to those who prepare for it today.", "I have no special talent. I am only passionately curious.", "The successful warrior is the average man, with laser-like focus.", "Those who dare to fail miserably can achieve greatly.", "The root of suffering is attachment.", "A great man is always willing to be little.", "Wisely, and slow. They stumble that run fast.", "Keep calm and carry on.", "To be, or not to be, that is the question.", "That's one small step for a man, one giant leap for mankind.", "Early to bed and early to rise makes a man healthy, wealthy, and wise.", "Ask not what your country can do for you, but what you can do for your country.", "Family is the most important thing in the world.", "All I was doing was trying to get home from work.", "I came, I saw, I conquered.", "I think, therefore I am.", "Whenever you find yourself on the side of the majority, it is time to pause and reflect.", "Be yourself; everyone else is already taken.", "The journey of a thousand miles begins with one step.", "I've failed over and over and over again in my life and that is why I succeed.", "It does not matter how slowly you go so long as you do not stop.", "It's not whether you get knocked down, it's whether you get up.", "Go confidently in the direction of your dreams. Live the life you have imagined.", "You miss 100 percent of the shots you never take.", "Nonviolence is a weapon of the strong.", "Peace begins with a smile.", "Stay hungry, stay foolish.", "Good artists copy, great artists steal.", "Big Brother is watching you.", "Education is the most powerful weapon which you can use to change the world.", "The only thing that interferes with my learning is my education.", "If you think you can do a thing or think you can't do a thing, you're right.", "Better to die standing than to live on your knees.", "It always seems impossible until it's done.", "Try not to become a man of success but rather to become a man of value.", "Insanity: doing the same thing over and over again and expecting different results.", "Our life is frittered away by detail… simplify, simplify.", "The weak can never forgive. Forgiveness is the attribute of the strong.", "The unexamined life is not worth living.", "Turn your wounds into wisdom.", "I don't think of all the misery but of the beauty that still remains.", "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.", "A man who stands for nothing will fall for anything.", "Love all, trust a few, do wrong to none.", "Do what you can, with what you have, where you are.", "Little by little, one travels far."];
  let num = rngNumGen();
  rngText = listArray[num];
  return rngText;
}

function puzzleGenerator() {
  const textArray = randomSentenceGenerator().toLowerCase().split(" ");
  for (let i = 0; i < textArray.length; i++) {
    let splitWord = textArray[i].split("");
    let alteredWord = [];
    splitWord.forEach(char => {
      if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        alteredWord.push("-")       
      } else (
        alteredWord.push(char)
      )
    });
    console.log(alteredWord, "alteredWord");
  }
}
puzzleGenerator();

// UI Logic

