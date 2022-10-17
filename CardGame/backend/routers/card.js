const router = require("express").Router();
const { User } = require("../model");
const Card = require("../functions/Card");

router.post("/get_user_cards", async (req, res) => {
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
  //   console.log(new Card());
  const { id } = req.body;
  console.log(id);
  const init = await User.findOne({
    where: { user_id: id },
    attributes: ["cards"],
    raw: true,
  });
  console.log(init);
  initCards = init.cards ? JSON.parse(init.cards) : [];
  //   initCards = init?.cards;
  console.log("처음카드", initCards);
  const newCards = Array(5)
    .fill(0)
    .map(el => new Card());
  const newCardSet = [...initCards, ...newCards];
  console.log("합친카드", newCardSet);
  await User.update(
    {
      cards: JSON.stringify(newCardSet),
    },
    {
      where: { user_id: id },
    }
  ).then(() => {});
});

module.exports = router;
