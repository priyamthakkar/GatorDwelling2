const express = require("express");
const router = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

router.route("/dwellings").get(async function (req, res) {
    try {
        const data = await dbo.getDb().collection("dwellings").find({}).toArray();
        res.status(200).send(data);
    } catch {
        res.status(400).type('json').send(err);
    }
});

router.route("/reviews/:id").get(async function (req, res) {
    try {
        const data = await dbo.getDb().collection("reviews").find({dwellingId: parseInt(req.params.id)}).toArray();
        res.status(200).send(data);
    } catch {
        res.status(400).type('json').send(err);
    }
});

router.route("/dwellings/:id").get(async function (req, res) {
    try {
        const data = await dbo.getDb().collection("dwellings").findOne({id: parseInt(req.params.id)});
        res.status(200).send(data);
    } catch {
        res.status(400).type('json').send(err);
    }
});

router.route("/apikey").get(async function (req, res) {
    try {
        const fs = require("fs");
        const apikey = await fs.readFile("./apikey.txt", {encoding: 'utf8'}, (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(data);
            res.send(data);
        });
    } catch {
        res.status(400).type('json').send("failed to fetch apikey")
    }
})

module.exports = router;