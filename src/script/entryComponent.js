/* function containing template literals - strings together what is displayed on the DOM */
const makeJournal = (journalEntries) => {
    return `
    <div id="journalContainer">
 <p>Date of Entry: ${journalEntries.date}</p>
 <p>Concepts Covered: ${journalEntries.concepts}</p>
 <p>Journal Entry: ${journalEntries.entry}</p>
 <p>Mood: ${journalEntries.mood}</p>
 <button type="button" id="deleteEntry--${journalEntries.id}">Delete Entry</button>
 <button type="button" id="editEntry--${journalEntries.id}">Edit Entry</button>
 </div>
 `
}
export default makeJournal;
