import Papa from "papaparse";

export const fetchSheetData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch data!");
  const csvText = await response.text();
  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (err) => reject(err),
    });
  });
};
