const fs = require("fs");
const path = require("path");

//设置根目录
var root = "./铁路选线设计";

var arr = [];

//调用函数遍历根目录，同时传递 文件夹路径和对应的数组
//请使用同步读取
fileDisplay(root, arr);
//读取完毕则写入到txt文件中
fs.writeFileSync("./data.txt", JSON.stringify(arr));

function fileDisplay(dirPath, arr) {
  var filesList = fs.readdirSync(dirPath);
  for (var i = 0; i < filesList.length; i++) {
    //描述此文件/文件夹的对象
    var fileObj = {};
    fileObj.name = filesList[i];
    // console.log(fileObj.name)
    //拼接当前文件的路径(上一层路径+当前file的名字)
    var filePath = path.join(dirPath, filesList[i]);
    //根据文件路径获取文件信息，返回一个fs.Stats对象
    var stats = fs.statSync(filePath);
    var content =
      "http://gdzx.xnjdcbs.com/files/view/base_files/video_resources/RailwayLineSelectionDesign/";
    if (stats.isDirectory()) {
      console.log(content + fileObj.name + "/1.mp4");
      fs.writeFileSync(
        "./铁路选线设计/" + fileObj.name + "/url.txt",
        content + fileObj.name + "/1.mp4",
        error => {
          if (error) return console.log("写入文件失败,原因是" + error.message);
          console.log("写入成功");
        }
      );
    } else {
    }
  }
}
