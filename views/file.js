const fs = require("fs");
const path = require("path");

//设置根目录
var root = "./url";

var arr = [];

//调用函数遍历根目录，同时传递 文件夹路径和对应的数组
//请使用同步读取
fileDisplay(root, arr);
//读取完毕则写入到txt文件中

function fileDisplay(dirPath, arr) {
  var filesList = fs.readdirSync(dirPath);
  console.log(filesList.length);
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
      "http://gdzx.xnjdcbs.com/files/view/base_files/video_resources/HighSpeedRailway/";
    if (stats.isDirectory()) {
      (function(name) {
        fs.readFile("./url/" + name + "/p1-url.txt", "utf8", function(
          error,
          files
        ) {
          var result = files.replace(
            /RailwayLineSelectionDesign/g,
            "HighSpeedRailway"
          );
          console.log(result, name);
          fs.writeFileSync(
            "./url/" + name + "/p1-url.txt",
            result,
            "utf8",
            function(err) {
              if (err) {
                console.log(err);
              }
            }
          );
        });
      })(fileObj.name);
    } else {
    }
  }
}

const writeFileRecursive = function(path, buffer, callback) {
  let lastPath = path.substring(0, path.lastIndexOf("/"));
  fs.mkdir(lastPath, { recursive: true }, err => {
    if (err) return callback(err);
    fs.writeFile(path, buffer, function(err) {
      if (err) return callback(err);
      return callback(null);
    });
  });
};

const buffer = "test hahahhhhh";
// writeFileRecursive("./public/test/file1", buffer, err => {
//   if (err) console.error(err);
//   console.info("write success");
// });
