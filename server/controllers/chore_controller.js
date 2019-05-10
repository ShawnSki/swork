let chores = [
    { listing: 'Take out da trash cuz its smellin bad yo.', points: 20, category: 'Interior', id: 1},
    { listing: 'The shingles blew right off the roof da other day. Fix it!', points: 80, category: 'Exterior', id: 2},
    { listing: 'Mow da grazz cuz it lookn shaggy.', points: 40, category: 'Yard', id: 3}
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
            categroy: req.body.category,
            id: id
        }
        // chores = [...chores, newChore];
        chores.push(newChore);
        res.status(200).send(chores);
        // Do I need to '.send' anything here?
        // console.log(chores)
    } ,
    
    deleteChore: (req, res) => {
        
        chores = chores.filter((item) => item.id !== +req.params.id)
        console.log(chores)
        res.status(200).send(chores);
    }

}