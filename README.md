# ox-cli 

[一个用于vue项目的脚手架](http://git.tools.pjbest.com/oxui/ox-cli)


### 安装

要求: [Node.js](https://nodejs.org/en/) (>=6.x, 8.x preferred), npm version 3+ and [Git](https://git-scm.com/).

``` bash
$ npm install -g ox-cli
```
### 完整用法 :

``` 
$ npm install -g ox-cli
$ ox init ox-webpack my-project
$ cd my-project
$ ox create order -u 'username' -t 123456
$ npm install
$ npm run dev
```


### 用法介绍一 : 

``` bash
$ ox init <template-name> <project-name>
```

例子:

``` bash
$ ox init ox-webpack my-project
```

上面的命令,将从 [http://git.tools.pjbest.com/oxui/ox-webpack.git](http://git.tools.pjbest.com/oxui/ox-webpack)拿到基于webpack的模板,通过命令交互输入配置信息, 然后创建一个叫my-project的项目.

### 用法介绍二 : 

``` bash
$ ox list
```

该命令将例举出有哪些可用的模板

### 用法介绍三 : 

``` bash
$ ox create <module-name> [option]
```

例子1:

``` bash
$ ox create order --username  '用户名' --tel 123456
```

上述命令,将录入输入的参数,用脚手架内置的一个名叫order的业务模板,在my-project项目的src/assets路径下,创建一个vue文件

例子2:

``` bash
$ ox create order --configName myConfig
```

上述命令,`myconfig`为配置文件,内容为一个JSON格式的对象,存放在my-project/config_tem.即根据配置文件的内容,用脚手架内置的order模板,在my-project项目的src/assets路径下,创建一个vue文件.
  