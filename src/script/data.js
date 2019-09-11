   const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    }
}
// fetch("http://localhost:3000/entries") 
//     .then(entries => entries.json())
//     .then(parsedEntries => {
//        renderJournalEntries(parsedEntries)
//    })
export default API;