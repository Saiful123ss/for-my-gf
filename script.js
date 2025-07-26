const letters = {
  sad: `
    Hey love, I know you're feeling down. 🥺  
    I wish I could hug you right now. Just remember how strong and amazing you are.  
    I'm always here, cheering you on. 💕
  `,
  happy: `
    Yay! I’m so happy you’re happy! 😄  
    Your smile is everything to me. Keep shining and let’s celebrate this beautiful moment together. 🎉
  `,
  angry: `
    It’s okay to feel upset sometimes.  
    Breathe in, count to 10, and remember I love you even on your worst days. ❤️  
    I’m always ready to listen — not judge.
  `,
  miss: `
    I miss you too, so much. 🥹  
    Just imagine me holding your hand right now.  
    We'll be together again soon. 💞  
    <br><br>
    <img src="her-picture.jpg" alt="Her Beautiful Face">
    <p style="font-style: italic; margin-top: 10px;">Your smile lights up my world 🌟</p>
  `
};

function openLetter(type) {
  document.getElementById('letterText').innerHTML = letters[type];
  document.getElementById('popup').style.display = 'flex';
}

function closeLetter() {
  document.getElementById('popup').style.display = 'none';
}
