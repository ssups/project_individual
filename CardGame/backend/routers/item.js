const router = require("express").Router();
const { Inventory } = require("../model");

router.post("/get_user_items", async (req, res) => {
  console.log("들어옴");
  const { id } = req.body;
  const data = await Inventory.findOne({
    where: { user_id: id },
    raw: true,
  });
  res.send(data);
});

module.exports = router;
