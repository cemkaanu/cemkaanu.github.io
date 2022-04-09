(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('voxel', {
        "color": [
            "#1796ff",
            "#24ffc4",
            "#24ff33",
            "#83ff17"
        ],
        "backgroundColor": "#222222",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#ffffff"
            },
            "subtextStyle": {
                "color": "#eeeeee"
            }
        },
        "line": {
            "itemStyle": {
                "borderWidth": "2"
            },
            "lineStyle": {
                "width": "3"
            },
            "symbolSize": "8",
            "symbol": "emptyCircle",
            "smooth": false
        },
        "radar": {
            "itemStyle": {
                "borderWidth": "2"
            },
            "lineStyle": {
                "width": "3"
            },
            "symbolSize": "8",
            "symbol": "emptyCircle",
            "smooth": false
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": "0",
                "barBorderColor": "#ccc"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#ccc"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#ccc"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#ccc"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#ccc"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#ccc"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#ccc"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#ccc"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#ffee51",
                "color0": "#ffffff",
                "borderColor": "#ff715e",
                "borderColor0": "#797fba",
                "borderWidth": "1"
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": "0",
                "borderColor": "#ccc"
            },
            "lineStyle": {
                "width": "1",
                "color": "#888888"
            },
            "symbolSize": "8",
            "symbol": "emptyCircle",
            "smooth": false,
            "color": [
                "#1796ff",
                "#24ffc4",
                "#24ff33",
                "#83ff17"
            ],
            "label": {
                "color": "#333333"
            }
        },
        "map": {
            "itemStyle": {
                "areaColor": "#555555",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#ffffff"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,175,81,0.5)",
                    "borderColor": "#ffaf51",
                    "borderWidth": 1
                },
                "label": {
                    "color": "#ffee51"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "areaColor": "#555555",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#ffffff"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,175,81,0.5)",
                    "borderColor": "#ffaf51",
                    "borderWidth": 1
                },
                "label": {
                    "color": "#ffee51"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#666666"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#999999"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#555555"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#666666"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#999999"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#555555"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#666666"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#999999"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#555555"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#666666"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#999999"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#555555"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.05)",
                        "rgba(200,200,200,0.02)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "iconStyle": {
                    "borderColor": "#666666"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#999999"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#cccccc",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#cccccc",
                    "width": 1
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#1796ff",
                "width": 1
            },
            "itemStyle": {
                "color": "#1796ff",
                "borderWidth": 1
            },
            "controlStyle": {
                "color": "#1796ff",
                "borderColor": "#1796ff",
                "borderWidth": "0.5"
            },
            "checkpointStyle": {
                "color": "#1796ff",
                "borderColor": "#1796ff"
            },
            "label": {
                "color": "#1796ff"
            },
            "emphasis": {
                "itemStyle": {
                    "color": "#1796ff"
                },
                "controlStyle": {
                    "color": "#1796ff",
                    "borderColor": "#1796ff",
                    "borderWidth": "0.5"
                },
                "label": {
                    "color": "#1796ff"
                }
            }
        },
        "visualMap": {
            "color": [
                "#1796ff",
                "#1796ff",
                "#1796ff"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(255,255,255,0)",
            "dataBackgroundColor": "rgba(222,222,222,1)",
            "fillerColor": "rgba(255,113,94,0.2)",
            "handleColor": "#cccccc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#999999"
            }
        },
        "markPoint": {
            "label": {
                "color": "#333333"
            },
            "emphasis": {
                "label": {
                    "color": "#333333"
                }
            }
        }
    });
}));
