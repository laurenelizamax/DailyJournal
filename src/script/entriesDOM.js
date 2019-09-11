
  const renderJournalEntries = (entries) => {
   for (let i = 0; i < entries.length; i++) {
      const journalEntry = entries[i];
     dailyJournal.innerHTML += makeJournal(journalEntry);
     let dailyJournal = document.querySelector(".entryLog");
   }
 }
//  const journalAll = Object.create(renderJournalEntries);

 export default renderJournalEntries;