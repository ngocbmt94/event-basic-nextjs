import fs from "fs";
import { buildPath, extractData } from "../registration";

function handler(req, res) {
  if (req.method === "POST") {
    const eventId = req.query.eventId;
    const dataComment = req.body;

    const newComment = {
      id: eventId,
      ...dataComment,
    };

    const filePath = buildPath("comments.json");
    const data = extractData(filePath);
    data.push(newComment);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(200).json({ message: "sucessfully", comments: data });
  }
  if (req.method === "GET") {
    const filePath = buildPath("comments.json");
    const data = extractData(filePath);

    res.status(200).json({ message: "sucessfully", comments: data });
  }
}

export default handler;
