import xlsx from "node-xlsx";

const languages = {
  en: [
    "Name",
    "Plaque",
    "dateBirth",
    "Breed of Animal",
    "Gender",
    "Average Productivity",
    "Bovine Father",
    "Bovine Mother",
  ],
  es: [
    "Nombre",
    "Placa",
    "Fecha de nacimiento",
    "Raza",
    "Genero",
    "Promedio Productivo",
    "Padre",
    "Madre",
  ],
};

/**
 *
 * @param {{Name: string, Plaque: string, dateBirth: Date, Breed_of_Animal: string, Gender: string, Average_Productivity: float, Bovine_Father: string, Bivine_Mother: string}[]} dataBovines
 * @returns
 */
function generateBovineReports(dataBovines, { lang = "en" }) {
  const labels = languages[lang] || languages.es;
  const dataReports = [
    labels,
    ...dataBovines.map((bovine) => [
      bovine.Name,
      bovine.Plaque,
      bovine.dateBirth,
      bovine.Breed_of_Animal,
      bovine.Gender,
      bovine.Average_Productivity,
      bovine.Bovine_Father,
      bovine.Bivine_Mother,
    ]),
  ];
  const name: string = "Data Reports";
  const buffer = xlsx.build([{ name: name, data: dataReports }]);
  //fs.writeFileSync("report.xlsx", buffer, {encoding: "binary"});
  return buffer;
}
export const generateBovineReport = generateBovineReports;
