1. 快速生成package.json
	npm init -y
	Tips：
		为description字段添加描述，可以屏蔽此警告：npm WARN bable7@1.0.0 No description.
		添加repository字段，可以屏蔽此警告：npm WARN bable7@1.0.0 No repository field.
			"repository": {
				"type": "git",
				"url": "git+https://github.com/pigongting/engine.git"
			},

2. 安装babel命令行，以及同伴依赖@babel/core
	npm install --save-dev @babel/core @babel/cli
	
3. 根目录新建babel.config.js文件
	const presets = [
	  [
		"@babel/env",
		{
		  targets: {
			edge: "17",
			firefox: "60",
			chrome: "67",
			safari: "11.1",
		  },
		  useBuiltIns: "usage",
		},
	  ],
	];

	// module.exports = { presets };
	module.exports = {};

4. 在package.json中添加脚本
	{
		...
		"scripts": {
			"start": "set NODE_ENV=development&&babel --watch src --out-dir build",
			...
		},
		...
	}

5. 配置插件
	5.1 JSX
		npm install --save-dev @babel/preset-react

6. 新建src目录
	6.1 新建engine.js文件
		

7. 运行命令: npm start

8. typescript
	npm install --save-dev @babel/preset-typescript