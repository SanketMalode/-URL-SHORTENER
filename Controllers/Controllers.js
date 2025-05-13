const shortid = require("shortid");
const { URL } = require("../Models/UserModel.js");

async function handleShortURL(req, res) {
  const body = req.body;
  if (!body.URL)
    return res.status(400).json({ msg: "Bad Request URL is required" });
  const ShortID = shortid();
  console.log("Generated ShortID:", ShortID);

  await URL.create({
    ShortID: ShortID,
    RedirectURL: body.URL,
    VisitHistory: [],
    Createdby: req.user._id,
  });

  return res.render("index", {
    id: ShortID,
  });
}

async function HandleAnalytics(req, res) {
  const shortID = req.params.ShortID;
  const result = await URL.findOne({ ShortID: shortID });
  if (!result) return res.status(404).json({ msg: "Short URL not found" });
  return res.json({
    Totalclicks: result.VisitHistory.length,
    analytics: result.VisitHistory,
  });
}

module.exports = {
  handleShortURL,
  HandleAnalytics,
};
