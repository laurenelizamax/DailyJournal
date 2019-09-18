import makeJournal from "./entryComponent.js";
/* function to put entries on the DOM*/
const entriesDom = {

renderJournalEntries: (entries) => {
  let dailyJournal = document.querySelector(".entryLog");
  for (let i = 0; i < entries.length; i++) {
    const journalEntry = entries[i];
    dailyJournal.innerHTML += makeJournal(journalEntry);
  }
},
//moodFilter function for filtering moods
moodFilter: (entries, mood)  => { // entries is the parameter; mood defined in the API 
    let entryLog = document.querySelector(".entryLog");
    entryLog.innerHTML = ""; // setting it to an empty string
    entries.forEach(entry => { // going through all the entries and for each loop there is one entry
        if (entry.mood === mood) { //checking to see if the mood matches the mood selected; if not move to the next mood.
        entryLog.innerHTML += makeJournal(entry);
        }
      });
}
}

export default entriesDom