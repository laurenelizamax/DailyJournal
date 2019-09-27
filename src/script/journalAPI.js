/*fetch calls to local host*/
const API = {
    getJournalEntries: () => {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },
    createEntry: (newEntry) => {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntry)
        })
    },
    deleteEntries: (id) => {
        return fetch(`http://localhost:3000/entries/${id}`, {
            method: "DELETE"
        }).then(response => response.json())
},
    editEntries: (id) => {
        const updatedEntry = {
            date: document.querySelector("#editJournalDate").value,
            concepts: document.querySelector("#editConceptsEntry").value,
            entry: document.querySelector("#editJournalEntry").value,
            mood: document.querySelector("#editJournalMood").value
        };
        return fetch(`http://localhost:3000/entries/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedEntry)
        }).then(response => response.json())
     },
    getSingleEntry: (id) => {
        return fetch(`http://localhost:3000/entries/${id}`)
            .then(response => response.json())
    }
}

export default API
