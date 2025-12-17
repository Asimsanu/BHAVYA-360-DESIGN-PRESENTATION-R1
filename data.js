var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "FOYER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.16539689331774454,
        "pitch": 0.05412068548268856,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.292403243144415,
          "pitch": 0.31600896752081553,
          "rotation": 4.71238898038469,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6533578221113636,
          "pitch": 0.4142339215049802,
          "rotation": 0,
          "target": "0-foyer"
        },
        {
          "yaw": -0.03234588331245902,
          "pitch": 0.09195870862420463,
          "rotation": 0,
          "target": "2-living2"
        },
        {
          "yaw": 1.2205730565241026,
          "pitch": 0.16016203638318416,
          "rotation": 0,
          "target": "3-lift"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living2",
      "name": "LIVING2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.09291597392302542,
          "pitch": 0.15142081306552413,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -0.4594515988915422,
          "pitch": 0.08923144288771034,
          "rotation": 4.71238898038469,
          "target": "3-lift"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-lift",
      "name": "LIFT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0293751622118137,
          "pitch": 0.3605159091426309,
          "rotation": 0,
          "target": "1-living"
        },
        {
          "yaw": -1.0046223859623957,
          "pitch": 0.03443537232624827,
          "rotation": 0,
          "target": "2-living2"
        },
        {
          "yaw": 1.4962770326679866,
          "pitch": 0.2047220974773758,
          "rotation": 0,
          "target": "4-dining"
        },
        {
          "yaw": 1.2318125781343472,
          "pitch": 0.0434292913307317,
          "rotation": 0,
          "target": "5-vanity"
        },
        {
          "yaw": 0.8511642473365377,
          "pitch": 0.06027791290093276,
          "rotation": 4.71238898038469,
          "target": "6-pooja"
        },
        {
          "yaw": 2.20123116765516,
          "pitch": 0.027767389559613775,
          "rotation": 1.5707963267948966,
          "target": "7-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.09959546807452568,
          "pitch": -0.004419119001877192,
          "rotation": 0,
          "target": "6-pooja"
        },
        {
          "yaw": 0.6309506005809027,
          "pitch": 0.15299658293972485,
          "rotation": 1.5707963267948966,
          "target": "5-vanity"
        },
        {
          "yaw": 1.96271463870462,
          "pitch": 0.10088204868902473,
          "rotation": 0,
          "target": "8-utility-area"
        },
        {
          "yaw": 3.128458742307573,
          "pitch": 0.12229746590598367,
          "rotation": 0,
          "target": "7-kitchen"
        },
        {
          "yaw": -1.321735138509922,
          "pitch": 0.32324242858597074,
          "rotation": 0,
          "target": "3-lift"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-vanity",
      "name": "VANITY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3935142228237893,
          "pitch": 0.27287383827567524,
          "rotation": 3.141592653589793,
          "target": "4-dining"
        },
        {
          "yaw": 1.7691558245922536,
          "pitch": -0.0018084788035768184,
          "rotation": 0,
          "target": "7-kitchen"
        },
        {
          "yaw": 1.3168770196038686,
          "pitch": 0.1476884688340938,
          "rotation": 4.71238898038469,
          "target": "8-utility-area"
        },
        {
          "yaw": -2.416451545886101,
          "pitch": 0.01913955574415027,
          "rotation": 1.5707963267948966,
          "target": "6-pooja"
        },
        {
          "yaw": 2.86435844543783,
          "pitch": 0.2148848370789267,
          "rotation": 3.141592653589793,
          "target": "3-lift"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-pooja",
      "name": "POOJA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.127296558792822,
          "pitch": 0.31383762702957796,
          "rotation": 0,
          "target": "4-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1405228673242327,
          "pitch": 0.05012562470635018,
          "rotation": 1.5707963267948966,
          "target": "8-utility-area"
        },
        {
          "yaw": -2.7885568369944522,
          "pitch": 0.03475442743950907,
          "rotation": 1.5707963267948966,
          "target": "5-vanity"
        },
        {
          "yaw": 3.0611748009874535,
          "pitch": 0.11667293148816427,
          "rotation": 3.141592653589793,
          "target": "4-dining"
        },
        {
          "yaw": 3.082523042171095,
          "pitch": 0.004374845722852072,
          "rotation": 0,
          "target": "6-pooja"
        },
        {
          "yaw": 2.4106177774401516,
          "pitch": 0.03338721330829486,
          "rotation": 15.707963267948973,
          "target": "3-lift"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-utility-area",
      "name": "UTILITY AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7981870806805063,
          "pitch": 0.09887469946466076,
          "rotation": 0,
          "target": "7-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "BHAVYA 360 DESIGN PRESENTATION R1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
