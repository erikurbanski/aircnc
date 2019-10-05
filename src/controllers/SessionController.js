/**
 * index   - retorna a listagem de sessões;
 * show    - retorna uma única sessão;
 * store   - cria uma sessão;
 * update  - atualiza uma sessão;
 * destroy - remve uma sessão;
 */

const User = require("../models/User");

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email });
    }

    return res.json(user);
  }
};
