const uConfig = require("../../index").default;
const path = require("path");

const dev_config = new uConfig(path.resolve(__dirname, `dev.config.json`));
const prod_config = new uConfig(path.resolve(__dirname, `prod.config.json`));

function print_config_values(config) {
  console.log(`
    DB:
        USERNAME: ${config.get("DB.USERNAME")}
        PASSWORD: ${config.get("DB.PASSWORD")}
    API:
        ENDPOINT: ${config.get("API.ENDPOINT")}
    OS:
        VERSION: ${config.get("OS.VERSION", "❓")}
    `);
}

print_config_values(dev_config);
print_config_values(prod_config);
