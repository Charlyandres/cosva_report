import { Router } from "express";
import { connectionClient } from "../client";
import { generateBovineReport } from "../reports/bovines";
import { format } from "date-fns";

const router = Router();

router.get("/report", async (req, res) => {
  try {
    const lang = req.query.lang.toString() || "en";
    const response = await connectionClient.query("SELECT * from bovines");
    const bovines = await response.rows;
    const buffer = generateBovineReport(bovines, { lang });
    //configurar diseño excel reporte
    const date = format(new Date(), "dd-MM-yyyy hh-mm");
    res.setHeader(
      "Content-Disposition",
      "inline; filename=Report users " + date + ".xlsx"
    );
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.send(buffer);
  } catch (err) {
    console.log(err);
  }
});

//exportacion nombrada
//export const api = 1;

export default router;
