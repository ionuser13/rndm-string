const messages = ["This is where all begins...", "Commit commited", "Version control is awful", "COMMIT ALL THE FILES!", "The same thing we do every night, Pinky - try to take over the world!", "Lock S-foils in attack position", "This commit is a lie", "I'll explain when you're older!", "Here be Dragons", "Reinventing the wheel. Again", "This is not the commit message you are looking for", "Batman! (This commit has no parents)"];

const funCommit = () => {
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`)
};
module.exports = {funCommit};