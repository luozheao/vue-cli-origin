var _path = require('path');
var _utils = require('./utils');
var _assert = require('assert'); //命令窗口提示语句函数
var _fs = require('fs');
var _chalk = require('chalk');
var success = _chalk.green;

function generate(program, _ref) {
    var cwd = _ref.cwd; //当前运行脚本所在的根路径
    var defaultBase = 'src';
    var base = defaultBase;
    var assetsPath = _path.join(base, 'assets');

    _assert(_fs.existsSync(_path.join(cwd, base)), 'there is no folder named src, please check your location of cmd');

    //业务模块名字
    var tmpName = program.args[0]; //参数,program.args拿命令参数,program.xxx拿配置参数

    generateFolder(program, cwd, assetsPath, tmpName); //命令行,根路径,组件路径,实例名称

}

function generateFolder(program, cwd, folder, fileName) {
    var username = program.username;
    var tel = program.tel;
    var configName = program.configName; //config_tem

    var folderName = fileName;
    var folderPath = _path.join(cwd, folder, folderName); //实例页面 所在路径的拼接
    var configPath = _path.join(cwd, 'config_tem', configName);
    console.log(configPath, 'configPath')
    _assert(!_fs.existsSync(folderPath), 'warning: folder exists'); //判断文件是否存在

    //是否存在
    console.log(configName, 'configName');
    if (configName) {
        var isConfigPathExists = _fs.existsSync(configPath);
        console.log(isConfigPathExists, 'isConfigPathExists')
        _assert(!isConfigPathExists, `警告:${configPath}不存在`); //配置文件是否存在
        if (isConfigPathExists) {
            //拿到数据,进行渲染
            var obj = require(configPath);
            console.log(obj, 1111111111111);
        }
    }



    var files = [];
    files.push({
        fileName: fileName,
        options: {
            username,
            tel
        },
        format: 'js',
        handlebars: fileName + '.create.js'
    }, {
        fileName: fileName,
        format: 'vue',
        style: 'css',
        handlebars: fileName + '.create.vue'
    }, {
        fileName: fileName,
        format: 'css',
        handlebars: fileName + '.create.css'
    });

    createFile(folderPath, files);

}


function createFile(folderPath, files) {
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var template = _utils.getTemplate(file.handlebars); //找到文件,并生成编译好的模板
        var source = template(file); //注入数据
        var fileFullName = file.fileName + '.' + file.format;
        var filePath = _path.join(folderPath, fileFullName);
        _assert(!_fs.existsSync(filePath), 'waring: file exists');
        _utils.writeFile(filePath, source); //将内存中的页面,生成硬盘上的页面
        console.log(success('\nYou have successfully generated file ' + fileFullName + ' in\n' + folderPath));
    }
}


module.exports = exports = {
    generate: generate
}