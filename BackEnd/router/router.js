const express = require("express");

const router = express.Router();

const complaint = require("../model/complaint");

const fuel = require("../model/Fueldata");
var monk = require("monk");

var db = monk("127.0.0.1:27017/generator");

var complaints = db.get("complaints");

var fuelUsage = db.get("fueldatas");

router.post("/postdata", async (req, res) => {
  let complaints;
  try {
    complaints = new complaint({
      SparePart: req.body.send.SparePart,
      Quantity: req.body.send.Quantity,
      Description: req.body.send.Description,
      BranchName: req.body.send.BranchName,
      Status: req.body.send.Status,
    });
    await complaints.save();
  } catch (error) {
    console.log(error);
  }
  if (!complaints) {
    return res.status(500).json({ msg: "something went wrong" });
  }
  return res.status(200).json({ complaints });
});

router.get("/getData", function (req, res) {
  complaints.find({}, function (err, docs) {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }
  });
});

router.post("/fuelData", async (req, res) => {
  let fuelconsume;
  try {
    fuelconsume = new fuel({
      date: req.body.send.date,
      fuel: req.body.send.fuel,
    });
    await fuelconsume.save();
  } catch (error) {
    console.log(error);
  }
  if (!fuelconsume) {
    return res.status(500).json({ msg: "something went wrong" });
  }
  return res.status(200).json({ fuelconsume });
});

router.get("/getFuelData", (req, res) => {
  fuelUsage.find({}, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      res.send(docs);
    }
  });
});

router.get("/pendingComplaints", (req, res) => {
  complaints.find(
    {
      Status: "pending",
    },
    (err, docs) => {
      if (err) {
        res.send(err);
      } else {
        res.send(docs);
      }
    }
  );
});

router.get("/sucessComplaints", (req, res) => {
  complaints.find(
    {
      Status: "sucess",
    },
    (err, docs) => {
      if (err) {
        res.send(err);
      } else {
        res.send(docs);
      }
    }
  );
});

module.exports = router;
