const router = require("express").Router();
const { Post } = require("../model");

router.get("/get_all_posts", async (req, res) => {
  console.log("실행");
  const allPosts = await Post.findAll({ raw: true });
  res.send(allPosts);
});

router.post("/posting", async (req, res) => {
  const { id, title, main } = req.body;
  console.log(id, title, main);
  await Post.create({
    user_id: id,
    title,
    main,
  });
  const allPosts = await Post.findAll({ raw: true });
  res.send({ msg: "등록 완료", data: allPosts });
});

module.exports = router;
