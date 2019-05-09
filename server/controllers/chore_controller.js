let chores = [
    { listing: 'Take out da trash cuz its smellin bad yo.', points: 20, id: 1},
    { listing: 'The shingles blew right off the roof da other day. Fix it!', points: 80, id: 2},
    { listing: 'Mow da grazz cuz it lookn shaggy.', points: 40, id: 1}    
]


module.exports = {
    getAllChores: (req, res) => {
        res.status(200).send(chores);
    },
    
}