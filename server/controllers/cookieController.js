function setCookie(req, res, next) {
  const name = 'wbpk-cookie';

  if (!req.cookies[name]) {
    const options = {};
    res.cookie(name, generateRandomString(), options);
  }

  res.status(204).end();

  // ------
  function generateRandomString() {
    return `${Date.now()
      .toString()
      .slice(4)}-${Math.floor(Math.random() * 1000).toString()}`;
  }
}

module.exports = {
  setCookie
};
