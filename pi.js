const fs = require("fs");
var path = require("path");

function copyFolderSync(from, to) {
  fs.mkdirSync(to);
  fs.readdirSync(from).forEach((element) => {
    if (fs.lstatSync(path.join(from, element)).isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}

const gooo = () => {
  fs.rmSync(`${__dirname}/node_modules/use-wallet/dist`, {
    recursive: true,
    force: true,
  });

  copyFolderSync(
    `${__dirname}/useWallet`,
    `${__dirname}/node_modules/use-wallet/dist`
  );
};

gooo();
