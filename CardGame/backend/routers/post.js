const router = require("express").Router();
const { Post } = require("../model");
const parser = require("html-react-parser");

router.get("/get_all_posts", async (req, res) => {
  const allPosts = await Post.findAll({ raw: true });
  res.send(allPosts);
});

router.post("/posting", async (req, res) => {
  const { id, title, main } = req.body;
  console.log(parser(main).length >= 2);

  // 문제점: 글중간에 안뛰우고 바로 사진첨부하면 img태그가 p태그 안으로 들어가버려서 썸네일 사진으로 인식안됨
  const thumb_nail =
    parser(main).length >= 2
      ? parser(main).filter(el => el.props.className === "image")[0]?.props.children.props.src
      : parser(main).props.className === "image"
      ? parser(main).props.children.props.src
      : null;
  await Post.create({
    user_id: id,
    title,
    main,
    thumb_nail,
  });

  const allPosts = await Post.findAll({ raw: true });
  res.send({ msg: "등록 완료", data: allPosts });
});

module.exports = router;
