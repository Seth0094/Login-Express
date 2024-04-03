const {Pool} = require("pg");
const DBconfig = new Pool({
  "user":"postgres",
  "host":"localhost",
  "password":"Gg-75099756",
  "database":"sesion"
}
)

module.exports =  DBconfig;