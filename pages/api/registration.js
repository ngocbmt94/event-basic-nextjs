import fs from "fs";
import path from "path";

export function buildPath(fileName) {
  return path.join(process.cwd(), "data", fileName);
}

export function extractData(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData); // covert json to data
  return data;
}

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    const newEmail = {
      id: Math.floor(Math.random() * 1000000 + 1),
      email,
    };
    const filePath = buildPath("registration.json");
    const data = extractData(filePath);
    data.push(newEmail);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(200).json({ message: "successfully", email: data });
  } else {
    res.status(422).json({ message: "Invalid error" });
  }
}

export default handler;
