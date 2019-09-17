
import API from "./journalAPI.js";
import renderJournalEntries from "./entriesDOM.js";

/* API call to display entries on the DOM */
API.getJournalEntries()
    .then(entry => {
        renderJournalEntries(entry)
    });
   /* function that query selects and declares  ids for journal entry components and returns them*/
    function createJournalEntry () {
    let dateInput = document.querySelector("#journalDate").value;
    let conceptInput = document.querySelector("#journalConcepts").value;
    let entryInput = document.querySelector("#journalEntry").value;
    let moodInput = document.querySelector("#journalMood").value;

    return {
        "date": dateInput,
        "concepts": conceptInput,
        "entry": entryInput,
        "mood": moodInput
    };
}
/* event listener for add entry button */
document.querySelector("#buttonAddEntry").addEventListener("click", (event) => {
/*API call for created entry to be placed on the page. Clears out input fields and brings back entries. */
API.createEntry(createJournalEntry())
    .then( response => {
        document.querySelector("#journalDate").value = "";
        document.querySelector("#journalConcepts").value = "";
        document.querySelector("#journalEntry").value = "";
        document.querySelector(".entryLog").innerHTML = "";
        API.getJournalEntries()
            .then(entry => {
                renderJournalEntries(entry)
            });
       })
})

