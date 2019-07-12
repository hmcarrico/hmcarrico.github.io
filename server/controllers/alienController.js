module.exports = {
    getAllAliens: (req, res) => {
        const db = req.app.get('db');
        db.get_aliens().then(aliens => {
            res.status(200).send(aliens)
        }).catch(err => console.log(`Error with getAllAliens`, err))
    },
    updateAlien: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params;
        const {name} = req.body;
        db.update_alien([name, id]).then(aliens => {
            res.status(200).send(aliens)
        }).catch(err => console.log(`Error with updateAlien`, err))
    }
}