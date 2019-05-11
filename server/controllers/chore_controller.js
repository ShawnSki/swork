let chores = [
    { listing: 'Take out da trash cuz its smellin bad yo.', points: 20, notes: 'Write a note here . . .', id: 1},
    { listing: 'The shingles blew right off the roof da other day. Fix it!', points: 80, notes: 'Write a note here . . .', id: 2},
    { listing: 'Mow da grazz cuz it lookn shaggy.', points: 40, notes: 'Write a note here . . .', id: 3}
]


module.exports = {
    // This gets and returns the array of chores
    getAllChores: (req, res) => {
        res.status(200).send(chores);
    },
    // This adds a new chore to the chores array

    addChore: (req, res) => {
        // console.log(req.body)
        const id = chores[chores.length - 1].id + 1;
        const newChore = {
            listing: req.body.listing,
            points: +req.body.points,
            notes: req.body.category,
            id: id
        }
        // chores = [...chores, newChore];
        chores.push(newChore);
        res.status(200).send(chores);
        // console.log(chores)
    },
    
    deleteChore: (req, res) => {
        
        chores = chores.filter((item) => item.id !== +req.params.id)
        // console.log(chores)
        res.status(200).send(chores);
    },

    updateChore: (req, res) => {
        const {id} = req.params;
        const updatedChore = req.body;
        console.log(req.body)
        var myChore = chores.find(element => {
            return element.id === +id
        })
        myChore.notes = updatedChore.notes;

        // const choreFound = chores.filter((item) => item.id === +req.params.id)
        // const choreIndex = chores.indexOf(choreFound[0]);
        // chores.splice(choreIndex,1, req.body)
        // console.log(chores);
        res.status(200).send(chores);
    }

}