const express = require("express");

const Messag = require("../model/messageModel");

const router = express.Router();

const id = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
    Messag.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error while fetching.." + JSON.stringify(err, undefined, 2));
    })
});

router.post('/', (req, res) => {
    const newData = Messag({
        title: req.body.title,
        message: req.body.message
    });
    newData.save((err, docs) => {
        if (!err) res.send(docs);
        else console.log("Eror while inserting..." + JSON.stringify(err, undefined, 2));
    })
})


router.put('/:id', (req, res) => {
    if (!id.isValid(req.params.id))
        return res.status(400).send("Error id not found :" + req.params.id);
    const upData = {
        title: req.body.title,
        message: req.body.message,
    }
    Messag.findByIdAndUpdate(req.params.id, { $set: upData }, { new: true }, (err, docs) => {
        if (!err) res.send(docs);
        else console.log("Eroror in update" + JSON.stringify(err, undefined, 2));
    })
})

router.delete('/:id', (req, res) => {
    if (!id.isValid(req.params.id))
        return res.status(400).send("Error while deleting" + req.params.id);

    Messag.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log("Error while deleteing" + JSON.stringify(err, undefined, 2))
    })
})
module.exports = router;