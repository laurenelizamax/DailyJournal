// fix mood filter so that mood filter button changes the mood. Currently the mood is
// filtered by switching from mood to mood.

import API from "./journalAPI.js";
import entriesDOM from "./entriesDOM.js";
// import editForm from "./editForm.js";

/* API call to display entries on the DOM */
API.getJournalEntries()
    .then(entry => {
       entriesDOM. renderJournalEntries(entry)
    });

   /* function that query selects and declares  ids for journal entry components and
   returns them*/
    function createJournalEntry () {
    let dateInput = document.querySelector("#journalDate").value;
    let conceptInput = document.querySelector("#journalConcepts").value;
    let entryInput = document.querySelector("#journalEntry").value;
    let moodInput = document.querySelector("#journalMood").value;

    return {
        date: dateInput,
        concepts: conceptInput,
        entry: entryInput,
        mood: moodInput
    };
}
/* event listener for add entry button */
document.querySelector("#buttonAddEntry").addEventListener("click", (event) => {
/*API call for created entry to be placed on the page. Clears out input fields and
brings back entries. */
API.createEntry(createJournalEntry())
    .then( response => {
        document.querySelector("#journalDate").value = "";
        document.querySelector("#journalConcepts").value = "";
        document.querySelector("#journalEntry").value = "";
        document.querySelector(".entryLog").innerHTML = "";
        API.getJournalEntries()
        .then(entry => {
           entriesDOM. renderJournalEntries(entry)
        });
       })
})

// filter moods radio buttons
const moodArray = document.getElementsByName("moods");

moodArray.forEach(radioButton =>  {
    radioButton.addEventListener("click", event => {
        // event.target.value gets value of moods
        const moodName = event.target.value;
        API.getJournalEntries()
         .then(data => {
           entriesDOM.moodFilter(data, moodName);
            });
        })
    })

    // delete button for journal entry
    const entriesList = document.querySelector("#entryLog")

            entriesList.addEventListener("click", event => {
                const getEntry = (entry) => {
                    document.querySelector("#editEntriesHidden") .innerHTML = entry.id,
                    document.querySelector("#editJournalDate").innerHTML = entry.date,
                    document.querySelector("#editConceptsEntry").innerHTML = entry.concepts,
                    document.querySelector("#editJournalEntry").innerHTML = entry.entry,
                    document.querySelector("#editJournalMood").innerHTML =  entry.mood
                }
                if (event.target.id.startsWith("deleteEntry--")) {
                    // Extract entry id from the button's id attribute
                    const entryToDelete = event.target.id.split("--")[1] 
                    // Invoke the delete method, then get all entries and render them
                    API.deleteEntries(entryToDelete)
                    // clears off entry that has been deleted??
                        .then (response => {
                            document.querySelector("#entryLog").innerHTML = " ";
                    API.getJournalEntries()
                    .then(entry => {
                        entriesDOM. renderJournalEntries(entry)
                     });
                })
            }
            //Edit a single entry 
             else if (event.target.id.startsWith("editEntry--")) {
                    const editForm = (event.target.id.split("--")[1])
                API.getSingleEntry(editForm)
                .then(entry => {
                    document.querySelector("#editJournalDate").value = entry.date
                    document.querySelector("#editConceptsEntry").value = entry.concepts
                    document.querySelector("#editJournalEntry").value = entry.entry
                    document.querySelector("#editJournalMood").value = entry.mood
                    document.querySelector("#editEntriesHidden").value = event.target.id.split("--")[1]
                 });
                }
            }) 
            document.querySelector("#saveEntry").addEventListener("click", (event) => {
                const hiddenId = document.querySelector("#editEntriesHidden").value;
                console.log(hiddenId);
                        API.editEntries(hiddenId).then(() => {
                            document.querySelector("#entryLog").innerHTML = " ";
                        API.getJournalEntries().then(data => {
                            entriesDOM.renderJournalEntries(data)
                    })
                })
            })