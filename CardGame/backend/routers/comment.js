const { Comment } = require("../model");

const router = require("express").Router();

router.post("/get_comments", async (req, res) => {
  const { postId } = req.body;
  const comments = await Comment.findAll({ where: { post_id: postId }, raw: true });
  res.send(comments);
});
router.post("/register_comments", async (req, res) => {
  const { postId, userId, text } = req.body;
  await Comment.create({ post_id: postId, writer: userId, text });
  const comments = await Comment.findAll({ where: { post_id: postId }, raw: true });
  res.send({ msg: "등록 완료", data: comments });
});

module.exports = router;
