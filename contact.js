$(document).ready(function() {
			App.init();
			 $("#video").bind("contextmenu",function(){//取消右键事件
			        return false;
			    });
			 	var data={"date":"2020-06-04 02:30","dq":4,"hx":[{"data1":0,"data2":1,"date":"05-28","index":"1","time":"2020-05-28 02:30 德甲 奥格斯堡0:0帕德博恩","yc":"小球"},{"data1":1,"data2":1,"date":"05-28","index":"2","time":"2020-05-28 02:30 德甲 杜塞多夫2:1沙尔克04","yc":"大球"},{"data1":1,"data2":2,"date":"05-30","index":"3","time":"2020-05-30 02:30 德甲 弗赖堡0:1勒沃库森","yc":"小球"},{"data1":1,"data2":3,"date":"05-30","index":"4","time":"2020-05-30 21:30 德甲 美因茨0:1霍芬海姆","yc":"小球"},{"data1":1,"data2":4,"date":"05-30","index":"5","time":"2020-05-30 21:30 德甲 沙尔克040:1不来梅","yc":"小球"},{"data1":1,"data2":5,"date":"05-30","index":"6","time":"2020-05-30 21:30 德甲 柏林赫塔2:0奥格斯堡","yc":"小球"},{"data1":2,"data2":5,"date":"05-31","index":"7","time":"2020-05-31 00:30 德甲 拜仁5:0杜塞多夫","yc":"大球"},{"data1":3,"data2":5,"date":"05-31","index":"8","time":"2020-05-31 21:30 德甲 门兴4:1柏林联合","yc":"大球"},{"data1":4,"data2":5,"date":"06-01","index":"9","time":"2020-06-01 00:00 德甲 帕德博恩1:6多特蒙德","yc":"大球"}],"pk":"2.5/3(球)","score":"0:3","ss":"德甲","tj":"大球","vs":"不来梅VS法兰克福","wc":1,"xq":1};
				AmCharts.makeChart("beplay", {
					"theme": "light",
					"type": "serial",
					"dataProvider": data.hx,
					"valueAxes": [{
						"stackType": "3d",
						"unit": "",
						"position": "left"
					}],
					"startDuration": 1,
					"graphs": [{
						"balloonText": "[[time]] : <br><b>[[yc]]</b>",
						"fillAlphas": 0.9,
						"lineAlpha": 0.2,
						"type": "column",
						"valueField": "data2"
					}, {
						"balloonText": "[[time]] : <br><b>[[yc]]</b>",
						"fillAlphas": 0.9,
						"lineAlpha": 0.2,
						"type": "column",
						"valueField": "data1"
					}],
					"plotAreaFillAlphas": 0.1,
					"depth3D": 60,
					"angle": 30,
					"categoryField": "date",
					"categoryAxis": {
						"gridPosition": "start"
					},
					"export": {
						"enabled": true
					}
				});


				AmCharts.makeChart("beplay_pie", {
					"type": "pie",
					"theme": "light",
					"innerRadius": "40%",
					"radius": "40%",
					"legend":{
						"position":"bottom",
						"valueText": "[[percents]]%",
						"align":"center",
						"autoMargins":true
					},
					"gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
					"dataProvider": [{
						"type": "大球率",
						"num": data.dq
					}, {
						"type": "小球率",
						"num": data.xq
					}],
					"balloonText": "[[value]]",
					"valueField": "num",
					"titleField": "type",
					"balloon": {
						"drop": true,
						"adjustBorderColor": false,
						"color": "#FFFFFF",
						"fontSize": 16
					},
					"export": {
						"enabled": true
					}
				});
				
				
				var data_yp = [{"a":"2","b":"-2","c":"2020-06-30 04:28:59"},{"a":"3","b":"-1","c":"2020-06-30 06:06:10"},{"a":"2","b":"-2","c":"2020-06-30 08:06:10"},{"a":"1","b":"-3","c":"2020-06-30 11:01:02"},{"a":"2","b":"-2","c":"2020-06-30 11:54:17"},{"a":"1","b":"-3","c":"2020-06-30 12:26:53"},{"a":"2","b":"-2","c":"2020-06-30 12:28:25"},{"a":"1","b":"-3","c":"2020-06-30 13:00:30"},{"a":"2","b":"-2","c":"2020-06-30 13:23:15"},{"a":"1","b":"-3","c":"2020-06-30 13:24:48"},{"a":"2","b":"-2","c":"2020-06-30 13:28:56"},{"a":"1","b":"-3","c":"2020-06-30 14:04:07"},{"a":"2","b":"-2","c":"2020-06-30 14:06:12"},{"a":"3","b":"-1","c":"2020-06-30 14:08:16"},{"a":"2","b":"-2","c":"2020-06-30 14:11:22"}];
				Morris.Line({
					  element: 'beplay_yp',
					  data: data_yp,
					  xkey: 'c',
					  ykeys: ['a', 'b'],
					  lineColors: ['#fd397a', '#5d78ff'],
					  labels: ["06-25 00:00	挪超	斯塔贝VS桑 德", "2018-04-07 美职联 盐湖城 2:1 温哥华\t-0.75"]
					});

				AmCharts.makeChart("beplay_pie_yp", {
					"type": "pie",
					"theme": "light",
					"innerRadius": "40%",
					"radius": "40%",
					"legend":{
						"position":"bottom",
						"valueText": "[[percents]]%",
						"align":"center",
						"autoMargins":true
					},
					"gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
					"dataProvider": [{
						"type": "让胜概率",
						"num": 10
					}, {
						"type": "让负概率",
						"num": 5
					}],
					"balloonText": "[[value]]",
					"valueField": "num",
					"titleField": "type",
					"balloon": {
						"drop": true,
						"adjustBorderColor": false,
						"color": "#FFFFFF",
						"fontSize": 16
					},
					"export": {
						"enabled": true
					}
				});
				
				
				AmCharts.makeChart("beplay_op", {
					"theme": "light",
					"type": "serial",
					"dataProvider": [{
						"item": "必发-主",
						"yc": 33,
						"similar": 34
					}, {
						"item": "必发-平",
						"yc": 52,
						"similar": 55
					}, {
						"item": "必发-客",
						"yc": 42,
						"similar": 49
					},{
						"item": "盈亏-主",
						"yc": 55,
						"similar": 42
					}, {
						"item": "盈亏-平",
						"yc": 19,
						"similar": 22
					}, {
						"item": "盈亏-客",
						"yc": 51,
						"similar": 32
					}],
					"startDuration": 1,
					"graphs": [{
						"balloonText": "预测赛事[[category]] : <b>[[value]]</b>",
						"fillAlphas": 0.9,
						"lineAlpha": 0.2,
						"type": "column",
						"valueField": "yc"
					}, {
						"balloonText": "近似赛事 [[category]] : <b>[[value]]</b>",
						"fillAlphas": 0.9,
						"lineAlpha": 0.2,
						"type": "column",
						"clustered": false,
						"columnWidth": 0.5,
						"valueField": "similar"
					}],
					"plotAreaFillAlphas": 0.1,
					"categoryField": "item",
					"categoryAxis": {
						"gridPosition": "start"
					},

				});


				AmCharts.makeChart("beplay_pie_op", {
					"type": "pie",
					"theme": "light",
					"innerRadius": "40%",
					"radius": "40%",
					"legend":{
						"position":"bottom",
						"valueText": "[[percents]]%",
						"align":"center",
						"autoMargins":true
					},
					"gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
					"dataProvider": [{
						"type": "主胜概率",
						"num": 8
					}, {
						"type": "平局概率",
						"num": 7
					}, {
						"type": "客胜概率",
						"num": 4
					}],
					"balloonText": "[[value]]",
					"valueField": "num",
					"titleField": "type",
					"balloon": {
						"drop": true,
						"adjustBorderColor": false,
						"color": "#FFFFFF",
						"fontSize": 16
					},
					"export": {
						"enabled": true
					}
				});
				
				
				AmCharts.makeChart("beplay_gh", {
					  "type": "serial",
					   "theme": "light",
					  "categoryField": "fx",
					  "rotate": true,
					  "startDuration": 1,
					  "categoryAxis": {
					    "gridPosition": "start",
					    "position": "left"
					  },
					  "trendLines": [],
					  "graphs": [
					    {
					      "balloonText": "大球:[[value]]",
					      "fillAlphas": 0.8,
					      "id": "AmGraph-1",
					      "lineAlpha": 0.2,
					      "type": "column",
					      "valueField": "da"
					    },
					    {
					      "balloonText": "小球:[[value]]",
					      "fillAlphas": 0.8,
					      "id": "AmGraph-2",
					      "lineAlpha": 0.2,
					      "title": "Expenses",
					      "type": "column",
					      "valueField": "xiao"
					    }
					  ],
					  "guides": [],
					  "valueAxes": [
					    {
					      "id": "ValueAxis-1",
					      "position": "top",
					      "axisAlpha": 0
					    }
					  ],
					  "allLabels": [],
					  "balloon": {
							"drop": true,
							"adjustBorderColor": false,
							"color": "#FFFFFF",
							"fontSize": 16
					  },
					  "titles": [],
					  "dataProvider": [
					    {
					      "fx": "初盘",
					      "da": 4,
					      "xiao": 3
					    },
					    {
					      "fx": "临场",
					      "da": 5,
					      "xiao": 4
					    },
					    {
					      "fx": "终盘",
					      "da": 9,
					      "xiao": 7
					    }
					  ],
					    "export": {
					    	"enabled": true
					     }

					});

				AmCharts.makeChart("beplay_pie_gh", {
					"type": "pie",
					"theme": "light",
					"innerRadius": "40%",
					"radius": "40%",
					"legend":{
						"position":"bottom",
						"valueText": "[[percents]]%",
						"align":"center",
						"autoMargins":true
					},
					"dataProvider": [{
						"type": "大球率",
						"num": 9
					}, {
						"type": "小球率",
						"num": 7
					}],
					"balloonText": "[[value]]",
					"valueField": "num",
					"titleField": "type",
					"balloon": {
						"drop": true,
						"adjustBorderColor": false,
						"color": "#FFFFFF",
						"fontSize": 16
					},
					"export": {
						"enabled": true
					}
				});
				
    			 
				
			 
		});