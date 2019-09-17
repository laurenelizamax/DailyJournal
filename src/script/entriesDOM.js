import makeJournal from "./entryComponent.js";

/* function to put entries on the DOM*/
const renderJournalEntries = (entries) => {
  let dailyJournal = document.querySelector(".entryLog");
  for (let i = 0; i < entries.length; i++) {
    const journalEntry = entries[i];
    dailyJournal.innerHTML += makeJournal(journalEntry);
  }
}

export default renderJournalEntries;