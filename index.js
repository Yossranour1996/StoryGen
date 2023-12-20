// index.js
console.log('Hello from index.js!');
// const setupInputContainer = document.getElementById('setup-input-container')
// const novelBossText = document.getElementById('novel-boss-text')
const OpenAI = require ('openai').OpenAI;


// import OpenAI from 'node_modules/openai';
// const openai = new OpenAI();

const openai = new OpenAI({
  apiKey: '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',  dangerouslyAllowBrowser: true // This is also the default, can be omitted
});


document.getElementById("send-btn").addEventListener("click", () => {
  const setupTextarea = document.getElementById('setup-textarea')
  if (setupTextarea.value) {
    const userInput = setupTextarea.value
    setupInputContainer.innerHTML = `<img src="images/loading.jpg" class="loading" id="loading">`
    novelBossText.innerText = `Ok, just wait a second....`
    fetchBotReply(userInput)
    // fetchSynopsis(userInput)
  }
})
async function fetchBotReply(outline) {
  const chatCompletion = await openai.chat.completions.create({
    model: "text-davinci-003",
    prompt: "This story begins",
    max_tokens: 30,
  });
novelBossText.innerText = chatCompletion.choices[0].text;
}