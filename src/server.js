import {DatabaseSync} from "node:sqlite"

const db = new DatabaseSync("dataron.db")

const q = db.prepare("select * from logs")

console.log(q.all())
