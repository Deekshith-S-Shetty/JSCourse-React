const express = require("express");
const recordRoutes = express.Router();

const dbo = require("../db/conn");
const { ObjectId } = require("mongodb");

const objectId = require("mongodb").ObjectId;

recordRoutes.route("/record").get(async function (req, res) {
  let db_connect = dbo.getDb("JSCourse");
  try {
    db_connect
      .collection("questions")
      .find({})
      .toArray()
      .then((response) => {
        res.send(response);
      });
  } catch (err) {
    console.log(err);
  }
});

recordRoutes.route("/record/one").get(function (req, res) {
  let db_connect = dbo.getDb();
  try {
    db_connect
      .collection("questions")
      .findOne({ _id: new ObjectId("6460e18c75d7dccd38e7db35") })
      .then((response) => {
        res.send(response);
      });
  } catch (err) {
    console.log(err);
  }
});

module.exports = recordRoutes;
