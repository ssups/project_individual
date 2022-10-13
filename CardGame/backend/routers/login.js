const router = require("express").Router();
const { User } = require("../model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dot = require("dotenv");
dot.config();

router.post("/login", async (req, res) => {
  const { id, pw } = await req.body;
  const user = await User.findOne({
    where: { user_id: id },
    raw: true,
  });
  if (user) {
    bcrypt.compare(pw, user.user_pw, async (err, same) => {
      //   same 값은 true or false 로 뜬다.
      if (same) {
        await User.update({ login: true }, { where: { user_id: id } });
        // access token 발급
        const access_token = jwt.sign(
          {
            user_id: user.user_id,
            nick_name: user.nick_name,
            cards: user.cards,
          },
          process.env.ACCESS_TOKEN,
          {
            expiresIn: "15m",
          }
        );
        // refresh token 발급
        const refresh_token = jwt.sign(
          {
            user_id: user.user_id,
            nick_name: user.nick_name,
            cards: user.cards,
          },
          process.env.REFRESH_TOKEN,
          {
            expiresIn: "1h",
          }
        );
        // 토큰들 세션에 넣기
        req.session.access_token = access_token;
        req.session.refreh_token = refresh_token;
        console.log(req.session);
        res.send({ msg: "로그인 성공", success: true, data: user });
      } else {
        res.send({ msg: "비밀번호 틀림", success: false });
      }
    });
  } else res.send({ msg: "가입된 아이디가 없음", success: false });
});

router.get("/loginCheck", (req, res) => {
  console.log(req.session);
  const { access_token, refreh_token } = req.session;
  jwt.verify(access_token, process.env.ACCESS_TOKEN, (acc_err, acc_success) => {
    if (acc_err) {
      console.log("썩은 어세스토큰");
      jwt.verify(refreh_token, process.env.REFRESH_TOKEN, (ref_err, ref_success) => {
        if (ref_err) {
          console.log("썩은 리프레쉬 토큰 혹은 로그인 안됨");
          res.send({ isLogin: false });
        } else {
          // access token 재발급
          const re_access_token = jwt.sign(
            {
              user_id: ref_success.user_id,
              nick_name: ref_success.nick_name,
              cards: ref_success.cards,
            },
            process.env.ACCESS_TOKEN,
            {
              expiresIn: "15m",
            }
          );
          req.session.access_token = re_access_token;
          console.log("어세스토큰 재발급됨");
          res.send({ isLogin: true });
        }
      });
    } else {
      console.log("어세스토큰 살아있음");
      res.send({ isLogin: true });
    }
  });
});

module.exports = router;
