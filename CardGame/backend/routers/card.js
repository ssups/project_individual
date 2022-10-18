const router = require("express").Router();
const { User, Inventory } = require("../model");
const Card = require("../functions/Card");

router.post("/get_user_cards", async (req, res) => {
  console.log("겟유저카드실행");
  const { id } = req.body;
  const data = await User.findOne({
    where: { user_id: id },
    attributes: ["cards"],
    raw: true,
  });
  //   .then(el => console.log(el));
  //   console.log(data);
  res.send(data?.cards);
});

router.post("/open_card_pack", async (req, res) => {
  console.log("실행");
  const { id } = req.body;
  const init = await User.findOne({
    where: { user_id: id },
    attributes: ["cards"],
    raw: true,
    include: {
      model: Inventory,
      attributes: ["card_pack_basic"],
    },
  });
  const initCards = init.cards ? JSON.parse(init.cards) : [];
  const initCardPackBasic = init["Inventories.card_pack_basic"];
  //   console.log("처음카드", initCards);
  const newCards = Array(5)
    .fill(0)
    .map(el => new Card());
  const newCardSet = [...initCards, ...newCards];
  await User.update(
    {
      cards: JSON.stringify(newCardSet),
    },
    {
      where: { user_id: id },
    }
  );
  await Inventory.update({ card_pack_basic: initCardPackBasic - 1 }, { where: { user_id: id } });
  res.send("개봉완료");
});

module.exports = router;
