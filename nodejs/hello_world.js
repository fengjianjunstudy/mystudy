var fs = require("fs");
fs.readFile("./testfile", "utf8", function(error, file) {  
     if (error) throw error;  
     console.log("我读完文件了！");
});
console.log("我不会被阻塞！");