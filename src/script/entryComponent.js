import renderJournalEntries from "./entriesDOM.js"

const makeJournal= (journalEntries) => {
    return `
 <p>Date of Entry: ${journalEntries.date}</p>
 <p>Concepts Covered: ${journalEntries.concepts}</p>
 <p>Journal Entry: ${journalEntries.entry}</p>
 <p>Mood: ${journalEntries.mood}</p>
 `
 }
//  const allEntries = Object.create(makeJournal);

 export default makeJournal;