const axios = require("axios");
const yargs = require("yargs");

const argv = yargs
  .options({
    ip: {
      demandOption: true,
      describe: "IP adress to be located",
      alias: "i"
    }
  })
  .help()
  .alias("help", "h")
  .argv;

const url = `http://ip-api.com/json/${argv.i}`

axios.get(url)
  .then((response) => {
    console.log(response.data);
  })
