const fs = require("fs");
const { URL } = require("url");

fs.writeFile(
  "./url.txt",
  "http://gdzx.xnjdcbs.com/files/view/base_files/video_resources/RailwayLineSelectionDesign/",
  error => {
    if (error) return console.log("写入文件失败,原因是" + error.message);
    console.log("写入成功");
  }
);
