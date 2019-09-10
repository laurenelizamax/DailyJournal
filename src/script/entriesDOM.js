 const dailyJournal = document.querySelector(".entryLog");
  const renderJournalEntries = (entries) => {
   for (let i = 0; i < entries.length; i++) {
      const journalEntry = entries[i];
     dailyJournal.innerHTML += makeJournal(journalEntry);
   }
 }
 const journalAll = Object.create(renderJournalEntries);

