const router = require("express").Router();
const { User, Inventory } = require("../model");

router.post("/get_user_items", async (req, res) => {
  console.log("들어옴");
  const { id } = req.body;
  const data = await Inventory.findOne({
    where: { user_id: id },
    raw: true,
  });
  res.send(data);
});
router.post("/open_point_pack", async (req, res) => {
  console.log("포인트팩 열기 실행");
  const { id, amount } = req.body;
  const init = await User.findOne({
    where: { user_id: id },
    attributes: ["point"],
    raw: true,
    include: {
      model: Inventory,
      attributes: [`point_${amount}`],
    },
  });
  console.log(init);
  const initPoint = init.point;
  const initPointPack = init[`Inventories.point_${amount}`];
  await User.update(
    {
      point: initPoint + amount,
    },
    {
      where: { user_id: id },
    }
  );
  switch (amount) {
    case 5000:
      await Inventory.update({ point_5000: initPointPack - 1 }, { where: { user_id: id } });
    default:
      break;
  }
  res.send("개봉완료");
});

module.exports = router;
