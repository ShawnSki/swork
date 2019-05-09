let chores = [
    { listing: 'Take out da trash cuz its smellin bad yo.', points: 20, id: 1},
    { listing: 'The shingles blew right off the roof da other day. Fix it!', points: 80, id: 2},
    { listing: 'Mow da grazz cuz it lookn shaggy.', points: 40, id: 3}
]


module.exports = {
    // This gets and returns the array of chores
    getAllChores: (req, res) => {
        res.status(200).send(chores);
    },
    // This adds a new chore to the chores array
    addChore: (req, res) => {
        // console.log(req.body)
        let id = chores[chores.length - 1].id + 1;
        const newChore = {
            listing: req.body.listing,
            points: +req.body.points,
            id: id
        }
        chores = [...chores, newChore];
        res.status(200).send(newChore);
        // ASK why are we sending "newChore" here
        // console.log(chores)
    } 
    

}