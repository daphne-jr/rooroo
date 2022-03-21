const hawkerData = require('../json/hawker.json');

const titles = {
  location_of_centre: "address",
  no_of_cooked_food_stalls: "no_of_cooked_food_stalls",
  no_of_mkt_produce_stalls: "no_of_mkt_produce_stalls",
  name_of_centre: "name",
  type_of_centre: "type_of_centre",
  no_of_stalls: "no_of_stalls",
  owner: "owner",
  _id: "id"
}

const keys = Object.values(titles);

const convertArrToCsv = (arr) => {
  const header = keys.join(',');
  const csv = [header];
  arr.forEach(item => {
    const line = [];
    keys.forEach(k => {
      line.push(item[k]);
    })
    line.join(',');
    csv.push(line);
  });
  return csv.join('\r\n')
}

io.writeFile(`./src/csv/hawker.csv`, convertArrToCsv(hawkerData), function (err) {
  if (err) return console.log(err);
  console.log(`hawker.csv generated`);
});
