const express = require("express");
const cors = require("cors");
require("./config/db");
const helpdeskModal = require("./modal/hepldesk");
const oxygenSuppModal = require("./modal/oxySupplier");
const PlasmaDoner = require("./modal/adddonate");
const PlasmaRequest = require("./modal/requestdonate");
const bedsModal = require("./modal/beds");
const adddonateModal = require("./modal/adddonate");
const foodModal = require("./modal/food");
const signupModal = require("./modal/signup");

const app = express();
app.use(cors());

const PORT = 5000;
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).send("Server listning");
});

// get and post for helpdesk
app.get("/gethelpdesk", async (req, res) => {
  try {
    const data = await helpdeskModal.find();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

app.post("/addhelpdesk", async (req, res) => {
  try {
    const newHelp = new helpdeskModal(req.body);
    const resp = await newHelp.save();
    if (resp) {
      return res.status(200).json({ resp });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

//get and post for oxygen
app.post("/addoxygensupply", async (req, res) => {
  try {
    const newSupp = new oxygenSuppModal(req.body);
    const resp = await newSupp.save();
    if (resp) {
      return res.status(200).json({ resp });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

//get and post for plasma donor
app.get("/plasmaData", async (req, res) => {
  try {
    const donateData = await PlasmaDoner.find({});
    const requestData = await PlasmaRequest.find({});
    const data = [...donateData, ...requestData];
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

app.post("/addplasma", async (req, res) => {
  console.log(req.body);
  try {
    const newSupp = new PlasmaDoner(req.body);
    const resp = await newSupp.save();
    if (resp) {
      return res.status(200).json({ resp });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

//get and post(already declare abv ) for requestpost
app.post("/requestplasma", async (req, res) => {
  console.log(req.body);
  try {
    const newSupp = new PlasmaRequest(req.body);
    const resp = await newSupp.save();
    if (resp) {
      return res.status(200).json({ resp });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

app.post("/adddonate", async (req, res) => {
  console.log(req.body);
  try {
    const newSupp = new adddonateModal(req.body);
    const resp = await newSupp.save();
    if (resp) {
      return res.status(200).json({ resp });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

// get and for bed
app.get("/getbeds", async (req, res) => {
  try {
    const beds = await bedsModal.find({});
    return res.status(200).json(beds);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

app.get("/getfood", async (req, res) => {
  try {
    const beds = await foodModal.find({});
    return res.status(200).json(beds);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const isuserExist = await signupModal.findOne({ email });
    console.log(isuserExist);
    if (isuserExist) {
      return res.status(400).json({ message: "Email allready exists" });
    } else {
      const newuser = new signupModal({ name, email, password });
      const resp = await newuser.save();
      if (resp) {
        return res.status(200).json({ resp });
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error });
  }
});

app.listen(PORT, () => {
  console.log("server listning at ", PORT);
});
