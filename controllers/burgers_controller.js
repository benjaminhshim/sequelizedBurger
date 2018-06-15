const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
    // burger.all(data => {
    //     var hbsObject = {
    //         burgers: data
    //     };
    //     res.render('index', hbsObject);
    // })

    db.burgers.findAll({}).then(data => {
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    })
});

router.post('/api/burgers', (req, res) => {
    // burger.create([
    //     "burger_name"
    // ], [
    //     req.body.burger
    // ], (result) => {
    //     res.redirect('/');
    // })

    db.burgers.create({
        burger_name: req.body.burger,
    }).then(result => {
        res.redirect('/');
    })


});

router.put('/api/burgers/:id', function(req, res) {
    // var condition = 'id = ' + req.params.id;
  
    // burger.update({
    //   devoured: req.body.devoured
    // }, condition, function(data) {
    //     res.status(200).end();
    // });

    db.burgers.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: req.params.id
        }
    }, data => {
        res.status(200).end();
    })
  });

module.exports = router;