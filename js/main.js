
const {Engine, Body, Bodies, World, Composite, Render, Runner} = Matter;

let engine;
let world;
let render;
let runner;
let box;
let circle1;
let circle2;
let floor;

let canvas;

let bookWeightsViewContainer = document.createElement("div");


const shelf_1_max_height = 9;
const shelf_2_max_height = 9;
const shelf_3_max_height = 13;

const shelf_max_width = 320;
let current_shelf_width = 0;

const booksData = [
    {
        "dimensions_structured": {
            "length": {
                "value": 6.25,
                "unit": "inches"
            },
            "width": {
                "value": 0.75,
                "unit": "inches"
            },
            "weight": {
                "value": 0.7495716908,
                "unit": "pounds"
            },
            "height": {
                "value": 9.25,
                "unit": "inches"
            }
        },
        "pages": 360
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.5,
                "unit": "inches"
            },
            "width": {
                "value": 0.62,
                "unit": "inches"
            },
            "weight": {
                "value": 0.525,
                "unit": "pounds"
            },
            "height": {
                "value": 8.2,
                "unit": "inches"
            }
        },
        "pages": 304
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.4,
                "unit": "inches"
            },
            "width": {
                "value": 0.7,
                "unit": "inches"
            },
            "weight": {
                "value": 1.1684499123001,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 237
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.25,
                "unit": "inches"
            },
            "width": {
                "value": 0.75,
                "unit": "inches"
            },
            "weight": {
                "value": 0.67020527648,
                "unit": "pounds"
            },
            "height": {
                "value": 8.5,
                "unit": "inches"
            }
        },
        "pages": 272
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.4,
                "unit": "inches"
            },
            "width": {
                "value": 0.7,
                "unit": "inches"
            },
            "weight": {
                "value": 1.1684499123001,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 237
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.5,
                "unit": "inches"
            },
            "width": {
                "value": 0.62,
                "unit": "inches"
            },
            "weight": {
                "value": 0.525,
                "unit": "pounds"
            },
            "height": {
                "value": 8.2,
                "unit": "inches"
            }
        },
        "pages": 304
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.25,
                "unit": "inches"
            },
            "width": {
                "value": 0.75,
                "unit": "inches"
            },
            "weight": {
                "value": 0.67020527648,
                "unit": "pounds"
            },
            "height": {
                "value": 8.5,
                "unit": "inches"
            }
        },
        "pages": 272
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.3,
                "unit": "inches"
            },
            "width": {
                "value": 1.15,
                "unit": "inches"
            },
            "weight": {
                "value": 2.06,
                "unit": "pounds"
            },
            "height": {
                "value": 9.5,
                "unit": "inches"
            }
        },
        "pages": 272
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.27,
                "unit": "inches"
            },
            "width": {
                "value": 1.54,
                "unit": "inches"
            },
            "weight": {
                "value": 2.4,
                "unit": "pounds"
            },
            "height": {
                "value": 9.51,
                "unit": "inches"
            }
        },
        "pages": 800
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.5,
                "unit": "inches"
            },
            "width": {
                "value": 0.4,
                "unit": "inches"
            },
            "weight": {
                "value": 0.33730726086,
                "unit": "pounds"
            },
            "height": {
                "value": 8.25,
                "unit": "inches"
            }
        },
        "pages": 160
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.3,
                "unit": "inches"
            },
            "width": {
                "value": 0.7,
                "unit": "inches"
            },
            "weight": {
                "value": 0.75,
                "unit": "pounds"
            },
            "height": {
                "value": 7.95,
                "unit": "inches"
            }
        },
        "pages": 336
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.25,
                "unit": "inches"
            },
            "width": {
                "value": 1,
                "unit": "inches"
            },
            "weight": {
                "value": 0.75,
                "unit": "pounds"
            },
            "height": {
                "value": 8,
                "unit": "inches"
            }
        },
        "pages": 248
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.31,
                "unit": "inches"
            },
            "width": {
                "value": 0.75,
                "unit": "inches"
            },
            "weight": {
                "value": 0.55,
                "unit": "pounds"
            },
            "height": {
                "value": 7.98,
                "unit": "inches"
            }
        },
        "pages": 272
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 0.83,
                "unit": "inches"
            },
            "weight": {
                "value": 0.95,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 368
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 9,
                "unit": "inches"
            },
            "width": {
                "value": 6,
                "unit": "inches"
            },
            "weight": {
                "value": 1.0625,
                "unit": "pounds"
            },
            "height": {
                "value": 0.9,
                "unit": "inches"
            }
        },
        "pages": 355
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 0.65,
                "unit": "inches"
            },
            "weight": {
                "value": 0.6062712205,
                "unit": "pounds"
            },
            "height": {
                "value": 6.81,
                "unit": "inches"
            }
        },
        "pages": 288
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 0.7,
                "unit": "inches"
            },
            "weight": {
                "value": 0.00220462262,
                "unit": "pounds"
            },
            "height": {
                "value": 8.9,
                "unit": "inches"
            }
        },
        "pages": 272
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.17,
                "unit": "inches"
            },
            "width": {
                "value": 0.43,
                "unit": "inches"
            },
            "weight": {
                "value": 0.29982867632,
                "unit": "pounds"
            },
            "height": {
                "value": 7.96,
                "unit": "inches"
            }
        },
        "pages": 122
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.40156,
                "unit": "inches"
            },
            "width": {
                "value": 0.799211,
                "unit": "inches"
            },
            "weight": {
                "value": 1.73944724718,
                "unit": "pounds"
            },
            "height": {
                "value": 9.499981,
                "unit": "inches"
            }
        },
        "pages": 320
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.75,
                "unit": "inches"
            },
            "width": {
                "value": 1.7,
                "unit": "inches"
            },
            "weight": {
                "value": 1.16,
                "unit": "pounds"
            },
            "height": {
                "value": 8.25,
                "unit": "inches"
            }
        },
        "pages": 410
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.98424,
                "unit": "inches"
            },
            "width": {
                "value": 0.94488,
                "unit": "inches"
            },
            "weight": {
                "value": 0.71,
                "unit": "pounds"
            },
            "height": {
                "value": 9.0551,
                "unit": "inches"
            }
        },
        "pages": 320
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.2,
                "unit": "inches"
            },
            "width": {
                "value": 0.6,
                "unit": "inches"
            },
            "weight": {
                "value": 0.7054792384,
                "unit": "pounds"
            },
            "height": {
                "value": 8.3,
                "unit": "inches"
            }
        },
        "pages": 104
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 11.417322823,
                "unit": "inches"
            },
            "width": {
                "value": 7.87401574,
                "unit": "inches"
            },
            "weight": {
                "value": 0.9700338894567,
                "unit": "pounds"
            },
            "height": {
                "value": 1.181102361,
                "unit": "inches"
            }
        },
        "pages": 262
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 1.05,
                "unit": "inches"
            },
            "weight": {
                "value": 1.02,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 301
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.1875,
                "unit": "inches"
            },
            "width": {
                "value": 1.09,
                "unit": "inches"
            },
            "weight": {
                "value": 0.73,
                "unit": "pounds"
            },
            "height": {
                "value": 8,
                "unit": "inches"
            }
        },
        "pages": 444
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.0999878,
                "unit": "inches"
            },
            "width": {
                "value": 1.499997,
                "unit": "inches"
            },
            "weight": {
                "value": 1.2,
                "unit": "pounds"
            },
            "height": {
                "value": 9.2999814,
                "unit": "inches"
            }
        },
        "pages": 480
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.5,
                "unit": "inches"
            },
            "width": {
                "value": 1.25,
                "unit": "inches"
            },
            "weight": {
                "value": 1.45,
                "unit": "pounds"
            },
            "height": {
                "value": 9.5,
                "unit": "inches"
            }
        },
        "pages": 400
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.25,
                "unit": "inches"
            },
            "width": {
                "value": 0.75,
                "unit": "inches"
            },
            "weight": {
                "value": 1.2,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 360
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7,
                "unit": "inches"
            },
            "width": {
                "value": 0.6,
                "unit": "inches"
            },
            "weight": {
                "value": 1.1,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 256
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.45,
                "unit": "inches"
            },
            "width": {
                "value": 1.02,
                "unit": "inches"
            },
            "weight": {
                "value": 0.98767093376,
                "unit": "pounds"
            },
            "height": {
                "value": 8.24,
                "unit": "inches"
            }
        },
        "pages": 325
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 1.4,
                "unit": "inches"
            },
            "weight": {
                "value": 2.12966545092,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 592
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 0.6875,
                "unit": "inches"
            },
            "weight": {
                "value": 1.21,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 304
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.37,
                "unit": "inches"
            },
            "width": {
                "value": 1.07,
                "unit": "inches"
            },
            "weight": {
                "value": 1.25,
                "unit": "pounds"
            },
            "height": {
                "value": 9.5,
                "unit": "inches"
            }
        },
        "pages": 304
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.28,
                "unit": "inches"
            },
            "width": {
                "value": 0.41,
                "unit": "inches"
            },
            "weight": {
                "value": 0.48,
                "unit": "pounds"
            },
            "height": {
                "value": 8.26,
                "unit": "inches"
            }
        },
        "pages": 192
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 0.75,
                "unit": "inches"
            },
            "weight": {
                "value": 0.65477291814,
                "unit": "pounds"
            },
            "height": {
                "value": 8,
                "unit": "inches"
            }
        },
        "pages": 288
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.75,
                "unit": "inches"
            },
            "width": {
                "value": 1.25,
                "unit": "inches"
            },
            "weight": {
                "value": 1.35,
                "unit": "pounds"
            },
            "height": {
                "value": 9.5,
                "unit": "inches"
            }
        },
        "pages": 336
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 1.0948797,
                "unit": "inches"
            },
            "weight": {
                "value": 1.25,
                "unit": "pounds"
            },
            "height": {
                "value": 8.999982,
                "unit": "inches"
            }
        },
        "pages": 407
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.1875,
                "unit": "inches"
            },
            "width": {
                "value": 0.76,
                "unit": "inches"
            },
            "weight": {
                "value": 0.5842249943,
                "unit": "pounds"
            },
            "height": {
                "value": 8,
                "unit": "inches"
            }
        },
        "pages": 263
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.14,
                "unit": "inches"
            },
            "width": {
                "value": 0.78,
                "unit": "inches"
            },
            "weight": {
                "value": 0.5621787681,
                "unit": "pounds"
            },
            "height": {
                "value": 7.96,
                "unit": "inches"
            }
        },
        "pages": 368
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 0.89,
                "unit": "inches"
            },
            "weight": {
                "value": 0.89948602896,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 256
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.5,
                "unit": "inches"
            },
            "width": {
                "value": 0.8598408,
                "unit": "inches"
            },
            "weight": {
                "value": 0.62,
                "unit": "pounds"
            },
            "height": {
                "value": 8.3999832,
                "unit": "inches"
            }
        },
        "pages": 304
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.3125,
                "unit": "inches"
            },
            "width": {
                "value": 0.720721,
                "unit": "inches"
            },
            "weight": {
                "value": 0.62,
                "unit": "pounds"
            },
            "height": {
                "value": 8,
                "unit": "inches"
            }
        },
        "pages": 320
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.31,
                "unit": "inches"
            },
            "width": {
                "value": 0.76,
                "unit": "inches"
            },
            "weight": {
                "value": 0.57981574906,
                "unit": "pounds"
            },
            "height": {
                "value": 8,
                "unit": "inches"
            }
        },
        "pages": 315
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 1,
                "unit": "inches"
            },
            "weight": {
                "value": 1.75047036028,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 576
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.5,
                "unit": "inches"
            },
            "width": {
                "value": 0.25,
                "unit": "inches"
            },
            "weight": {
                "value": 0.27337320488,
                "unit": "pounds"
            },
            "height": {
                "value": 8.25,
                "unit": "inches"
            }
        },
        "pages": 128
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.5,
                "unit": "inches"
            },
            "width": {
                "value": 0.9,
                "unit": "inches"
            },
            "weight": {
                "value": 0.56,
                "unit": "pounds"
            },
            "height": {
                "value": 8.3,
                "unit": "inches"
            }
        },
        "pages": 291
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.5,
                "unit": "inches"
            },
            "width": {
                "value": 1.03,
                "unit": "inches"
            },
            "weight": {
                "value": 1.1133344231,
                "unit": "pounds"
            },
            "height": {
                "value": 8.5,
                "unit": "inches"
            }
        },
        "pages": 448
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.17,
                "unit": "inches"
            },
            "width": {
                "value": 0.77,
                "unit": "inches"
            },
            "weight": {
                "value": 0.65,
                "unit": "pounds"
            },
            "height": {
                "value": 8.02,
                "unit": "inches"
            }
        },
        "pages": 368
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 9.16,
                "unit": "inches"
            },
            "width": {
                "value": 6.14,
                "unit": "inches"
            },
            "weight": {
                "value": 1.00089866948,
                "unit": "pounds"
            },
            "height": {
                "value": 1.15,
                "unit": "inches"
            }
        },
        "pages": 416
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.5,
                "unit": "inches"
            },
            "width": {
                "value": 1.125,
                "unit": "inches"
            },
            "weight": {
                "value": 1.5,
                "unit": "pounds"
            },
            "height": {
                "value": 9.5,
                "unit": "inches"
            }
        },
        "pages": 329
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.0078740086,
                "unit": "inches"
            },
            "width": {
                "value": 4.2519684996,
                "unit": "inches"
            },
            "weight": {
                "value": 0.1984160358,
                "unit": "pounds"
            },
            "height": {
                "value": 0.393700787,
                "unit": "inches"
            }
        }
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.39,
                "unit": "inches"
            },
            "width": {
                "value": 1.2,
                "unit": "inches"
            },
            "weight": {
                "value": 1.65,
                "unit": "pounds"
            },
            "height": {
                "value": 9.51,
                "unit": "inches"
            }
        },
        "pages": 448
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.1181,
                "unit": "inches"
            },
            "width": {
                "value": 0.15748,
                "unit": "inches"
            },
            "weight": {
                "value": 0.1,
                "unit": "pounds"
            },
            "height": {
                "value": 8.07085,
                "unit": "inches"
            }
        },
        "pages": 64
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 0.65,
                "unit": "inches"
            },
            "weight": {
                "value": 0.6062712205,
                "unit": "pounds"
            },
            "height": {
                "value": 6.81,
                "unit": "inches"
            }
        },
        "pages": 288
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.5,
                "unit": "inches"
            },
            "width": {
                "value": 0.47,
                "unit": "inches"
            },
            "weight": {
                "value": 0.5,
                "unit": "pounds"
            },
            "height": {
                "value": 8.5,
                "unit": "inches"
            }
        },
        "pages": 160
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.13,
                "unit": "inches"
            },
            "width": {
                "value": 0.84,
                "unit": "inches"
            },
            "weight": {
                "value": 0.6,
                "unit": "pounds"
            },
            "height": {
                "value": 8,
                "unit": "inches"
            }
        },
        "pages": 384
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 3.5,
                "unit": "inches"
            },
            "width": {
                "value": 1.3,
                "unit": "inches"
            },
            "weight": {
                "value": 0.53351867404,
                "unit": "pounds"
            },
            "height": {
                "value": 4.9,
                "unit": "inches"
            }
        },
        "pages": 50
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5,
                "unit": "inches"
            },
            "width": {
                "value": 0.25,
                "unit": "inches"
            },
            "weight": {
                "value": 0.1322773572,
                "unit": "pounds"
            },
            "height": {
                "value": 8.25,
                "unit": "inches"
            }
        },
        "pages": 54
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.125,
                "unit": "inches"
            },
            "width": {
                "value": 1.6,
                "unit": "inches"
            },
            "weight": {
                "value": 2.1605301676,
                "unit": "pounds"
            },
            "height": {
                "value": 9.25,
                "unit": "inches"
            }
        },
        "pages": 656
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.5,
                "unit": "inches"
            },
            "width": {
                "value": 0.75,
                "unit": "inches"
            },
            "weight": {
                "value": 0.87523518014,
                "unit": "pounds"
            },
            "height": {
                "value": 9.25,
                "unit": "inches"
            }
        },
        "pages": 288
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 9.04,
                "unit": "inches"
            },
            "width": {
                "value": 6.94,
                "unit": "inches"
            },
            "weight": {
                "value": 0.7495716908,
                "unit": "pounds"
            },
            "height": {
                "value": 0.51,
                "unit": "inches"
            }
        },
        "pages": 216
    },
    {
        "dimensions_structured": {
            "length": {
                "unit": "inches",
                "value": 7
            },
            "width": {
                "unit": "inches",
                "value": 0.9
            },
            "weight": {
                "unit": "pounds",
                "value": 1.27206725174
            },
            "height": {
                "unit": "inches",
                "value": 9.19
            }
        },
        "pages": 360
    },
    {
        "dimensions_structured": {
            "length": {
                "unit": "inches",
                "value": 7.40156
            },
            "width": {
                "unit": "inches",
                "value": 0.51181
            },
            "weight": {
                "unit": "pounds",
                "value": 1.212542441
            },
            "height": {
                "unit": "inches",
                "value": 9.21258
            }
        },
        "pages": 258
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.75,
                "unit": "inches"
            },
            "width": {
                "value": 1.25,
                "unit": "inches"
            },
            "weight": {
                "value": 1.1,
                "unit": "pounds"
            },
            "height": {
                "value": 9.5,
                "unit": "inches"
            }
        },
        "pages": 304
    },
    {
        "dimensions_structured": {
            "length": {
                "unit": "inches",
                "value": 6.5
            },
            "width": {
                "unit": "inches",
                "value": 1
            },
            "weight": {
                "unit": "pounds",
                "value": 1.12215291358
            },
            "height": {
                "unit": "inches",
                "value": 9.5
            }
        },
        "pages": 240
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.98424,
                "unit": "inches"
            },
            "width": {
                "value": 1.25984,
                "unit": "inches"
            },
            "weight": {
                "value": 1.8849523401,
                "unit": "pounds"
            },
            "height": {
                "value": 8.97636,
                "unit": "inches"
            }
        },
        "pages": 674
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.25,
                "unit": "inches"
            },
            "width": {
                "value": 1.5,
                "unit": "inches"
            },
            "weight": {
                "value": 1.32,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 496
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 8.99,
                "unit": "inches"
            },
            "width": {
                "value": 6.19,
                "unit": "inches"
            },
            "weight": {
                "value": 1.1353806493,
                "unit": "pounds"
            },
            "height": {
                "value": 0.71,
                "unit": "inches"
            }
        },
        "pages": 355
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.3125,
                "unit": "inches"
            },
            "width": {
                "value": 0.599,
                "unit": "inches"
            },
            "weight": {
                "value": 0.50926782522,
                "unit": "pounds"
            },
            "height": {
                "value": 8,
                "unit": "inches"
            }
        },
        "pages": 198
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.4,
                "unit": "inches"
            },
            "width": {
                "value": 0.8,
                "unit": "inches"
            },
            "weight": {
                "value": 0.55,
                "unit": "pounds"
            },
            "height": {
                "value": 8.1,
                "unit": "inches"
            }
        },
        "pages": 320
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 4.25,
                "unit": "inches"
            },
            "width": {
                "value": 0.625,
                "unit": "inches"
            },
            "weight": {
                "value": 0.3968320716,
                "unit": "pounds"
            },
            "height": {
                "value": 5.25,
                "unit": "inches"
            }
        },
        "pages": 128
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.26,
                "unit": "inches"
            },
            "width": {
                "value": 0.69,
                "unit": "inches"
            },
            "weight": {
                "value": 0.69,
                "unit": "pounds"
            },
            "height": {
                "value": 7.99,
                "unit": "inches"
            }
        },
        "pages": 324
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 10.3,
                "unit": "inches"
            },
            "width": {
                "value": 8.3,
                "unit": "inches"
            },
            "weight": {
                "value": 3.3,
                "unit": "pounds"
            },
            "height": {
                "value": 1.1,
                "unit": "inches"
            }
        },
        "pages": 688
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 8.34644,
                "unit": "inches"
            },
            "width": {
                "value": 0.992124,
                "unit": "inches"
            },
            "weight": {
                "value": 2.79546148216,
                "unit": "pounds"
            },
            "height": {
                "value": 10.177145,
                "unit": "inches"
            }
        },
        "pages": 640
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.25,
                "unit": "inches"
            },
            "width": {
                "value": 1.25,
                "unit": "inches"
            },
            "weight": {
                "value": 1.3668660244,
                "unit": "pounds"
            },
            "height": {
                "value": 7.25,
                "unit": "inches"
            }
        },
        "pages": 208
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.76,
                "unit": "inches"
            },
            "width": {
                "value": 1.08,
                "unit": "inches"
            },
            "weight": {
                "value": 1,
                "unit": "pounds"
            },
            "height": {
                "value": 9.53,
                "unit": "inches"
            }
        },
        "pages": 240
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 8,
                "unit": "inches"
            },
            "width": {
                "value": 0.6,
                "unit": "inches"
            },
            "weight": {
                "value": 1.20372395052,
                "unit": "pounds"
            },
            "height": {
                "value": 8.8,
                "unit": "inches"
            }
        },
        "pages": 144
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.25,
                "unit": "inches"
            },
            "width": {
                "value": 0.75,
                "unit": "inches"
            },
            "weight": {
                "value": 1.25,
                "unit": "pounds"
            },
            "height": {
                "value": 8.5,
                "unit": "inches"
            }
        },
        "pages": 144
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.098413,
                "unit": "inches"
            },
            "width": {
                "value": 1.901571,
                "unit": "inches"
            },
            "weight": {
                "value": 2.00179733896,
                "unit": "pounds"
            },
            "height": {
                "value": 9.200769,
                "unit": "inches"
            }
        },
        "pages": 736
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.893685,
                "unit": "inches"
            },
            "width": {
                "value": 0.586613,
                "unit": "inches"
            },
            "weight": {
                "value": 1.18829159218,
                "unit": "pounds"
            },
            "height": {
                "value": 10.07872,
                "unit": "inches"
            }
        },
        "pages": 288
    },
    {
        "dimensions_structured": {
            "length": {
                "unit": "inches",
                "value": 7.75
            },
            "width": {
                "unit": "inches",
                "value": 1
            },
            "weight": {
                "unit": "pounds",
                "value": 2.20462262
            },
            "height": {
                "unit": "inches",
                "value": 8.75
            }
        },
        "pages": 656
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.299198,
                "unit": "inches"
            },
            "width": {
                "value": 0.901573,
                "unit": "inches"
            },
            "weight": {
                "value": 1.15081300764,
                "unit": "pounds"
            },
            "height": {
                "value": 9.098407,
                "unit": "inches"
            }
        },
        "pages": 384
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 3,
                "unit": "inches"
            },
            "width": {
                "value": 0.6,
                "unit": "inches"
            },
            "weight": {
                "value": 0.1873929227,
                "unit": "pounds"
            },
            "height": {
                "value": 4.5,
                "unit": "inches"
            }
        },
        "pages": 248
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 3.66141,
                "unit": "inches"
            },
            "width": {
                "value": 0.51181,
                "unit": "inches"
            },
            "weight": {
                "value": 0.26896395964,
                "unit": "pounds"
            },
            "height": {
                "value": 5.5118,
                "unit": "inches"
            }
        },
        "pages": 256
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 8.4,
                "unit": "inches"
            },
            "width": {
                "value": 1,
                "unit": "inches"
            },
            "weight": {
                "value": 1.8959754532,
                "unit": "pounds"
            },
            "height": {
                "value": 9.3,
                "unit": "inches"
            }
        },
        "pages": 168
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.12,
                "unit": "inches"
            },
            "width": {
                "value": 1.65,
                "unit": "inches"
            },
            "weight": {
                "value": 1.87,
                "unit": "pounds"
            },
            "height": {
                "value": 9.25,
                "unit": "inches"
            }
        },
        "pages": 560
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.3125,
                "unit": "inches"
            },
            "width": {
                "value": 0.432432,
                "unit": "inches"
            },
            "weight": {
                "value": 0.34833037396,
                "unit": "pounds"
            },
            "height": {
                "value": 8,
                "unit": "inches"
            }
        },
        "pages": 176
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 0.78,
                "unit": "inches"
            },
            "weight": {
                "value": 0.7054792384,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 267
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 0.25,
                "unit": "inches"
            },
            "weight": {
                "value": 0.45,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 136
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 0,
                "unit": "inches"
            },
            "width": {
                "value": 0,
                "unit": "inches"
            },
            "weight": {
                "value": 0.1,
                "unit": "pounds"
            },
            "height": {
                "value": 0,
                "unit": "inches"
            }
        },
        "pages": 55
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.25,
                "unit": "inches"
            },
            "width": {
                "value": 0.5,
                "unit": "inches"
            },
            "weight": {
                "value": 0.35,
                "unit": "pounds"
            },
            "height": {
                "value": 8,
                "unit": "inches"
            }
        },
        "pages": 166
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.6,
                "unit": "inches"
            },
            "width": {
                "value": 0.6,
                "unit": "inches"
            },
            "weight": {
                "value": 0.68784225744,
                "unit": "pounds"
            },
            "height": {
                "value": 8.1,
                "unit": "inches"
            }
        },
        "pages": 144
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.21,
                "unit": "inches"
            },
            "width": {
                "value": 0.64,
                "unit": "inches"
            },
            "weight": {
                "value": 0.440924524,
                "unit": "pounds"
            },
            "height": {
                "value": 8.24,
                "unit": "inches"
            }
        },
        "pages": 256
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5,
                "unit": "inches"
            },
            "width": {
                "value": 0.3,
                "unit": "inches"
            },
            "weight": {
                "value": 0.2,
                "unit": "pounds"
            },
            "height": {
                "value": 7.8,
                "unit": "inches"
            }
        },
        "pages": 112
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.25,
                "unit": "inches"
            },
            "width": {
                "value": 0.8,
                "unit": "inches"
            },
            "weight": {
                "value": 0.54895103238,
                "unit": "pounds"
            },
            "height": {
                "value": 8,
                "unit": "inches"
            }
        },
        "pages": 304
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.3,
                "unit": "inches"
            },
            "width": {
                "value": 1.8,
                "unit": "inches"
            },
            "weight": {
                "value": 2.775,
                "unit": "pounds"
            },
            "height": {
                "value": 9.4,
                "unit": "inches"
            }
        },
        "pages": 944
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.5,
                "unit": "inches"
            },
            "width": {
                "value": 1.05,
                "unit": "inches"
            },
            "weight": {
                "value": 0.6,
                "unit": "pounds"
            },
            "height": {
                "value": 8.25,
                "unit": "inches"
            }
        },
        "pages": 320
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 8.06,
                "unit": "inches"
            },
            "width": {
                "value": 5.34,
                "unit": "inches"
            },
            "weight": {
                "value": 0.41,
                "unit": "pounds"
            },
            "height": {
                "value": 0.34,
                "unit": "inches"
            }
        },
        "pages": 96
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.25,
                "unit": "inches"
            },
            "width": {
                "value": 0.5,
                "unit": "inches"
            },
            "weight": {
                "value": 0.42549216566,
                "unit": "pounds"
            },
            "height": {
                "value": 8,
                "unit": "inches"
            }
        },
        "pages": 210
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 0.5,
                "unit": "inches"
            },
            "weight": {
                "value": 0.93475999088,
                "unit": "pounds"
            },
            "height": {
                "value": 8,
                "unit": "inches"
            }
        },
        "pages": 96
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.5,
                "unit": "inches"
            },
            "width": {
                "value": 1,
                "unit": "inches"
            },
            "weight": {
                "value": 0.44974301448,
                "unit": "pounds"
            },
            "height": {
                "value": 8.3,
                "unit": "inches"
            }
        },
        "pages": 368
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 4.3307,
                "unit": "inches"
            },
            "width": {
                "value": 4.3307,
                "unit": "inches"
            },
            "weight": {
                "value": 0.37699046802,
                "unit": "pounds"
            },
            "height": {
                "value": 7.00786,
                "unit": "inches"
            }
        },
        "pages": 320
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.01,
                "unit": "inches"
            },
            "width": {
                "value": 1.94,
                "unit": "inches"
            },
            "weight": {
                "value": 2.31264912838,
                "unit": "pounds"
            },
            "height": {
                "value": 8.99,
                "unit": "inches"
            }
        },
        "pages": 1192
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.75,
                "unit": "inches"
            },
            "width": {
                "value": 0.97,
                "unit": "inches"
            },
            "weight": {
                "value": 0.9,
                "unit": "pounds"
            },
            "height": {
                "value": 8.54,
                "unit": "inches"
            }
        },
        "pages": 256
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 8.95,
                "unit": "inches"
            },
            "width": {
                "value": 6.15,
                "unit": "inches"
            },
            "weight": {
                "value": 1.23899791244,
                "unit": "pounds"
            },
            "height": {
                "value": 0.78,
                "unit": "inches"
            }
        },
        "pages": 378
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 1.25,
                "unit": "inches"
            },
            "width": {
                "value": 6.5,
                "unit": "inches"
            },
            "weight": {
                "value": 2.15,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 730
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.3,
                "unit": "inches"
            },
            "width": {
                "value": 0.5,
                "unit": "inches"
            },
            "weight": {
                "value": 1.08908357428,
                "unit": "pounds"
            },
            "height": {
                "value": 9.2,
                "unit": "inches"
            }
        },
        "pages": 336
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.37794,
                "unit": "inches"
            },
            "width": {
                "value": 1.33858,
                "unit": "inches"
            },
            "weight": {
                "value": 1.46386941968,
                "unit": "pounds"
            },
            "height": {
                "value": 9.4488,
                "unit": "inches"
            }
        }
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 4.75,
                "unit": "inches"
            },
            "width": {
                "value": 0.5,
                "unit": "inches"
            },
            "weight": {
                "value": 0.40565056208,
                "unit": "pounds"
            },
            "height": {
                "value": 7,
                "unit": "inches"
            }
        },
        "pages": 128
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.31,
                "unit": "inches"
            },
            "width": {
                "value": 0.81,
                "unit": "inches"
            },
            "weight": {
                "value": 0.6,
                "unit": "pounds"
            },
            "height": {
                "value": 8,
                "unit": "inches"
            }
        },
        "pages": 336
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.15,
                "unit": "inches"
            },
            "width": {
                "value": 0.95,
                "unit": "inches"
            },
            "weight": {
                "value": 0.80027801106,
                "unit": "pounds"
            },
            "height": {
                "value": 7.94,
                "unit": "inches"
            }
        },
        "pages": 448
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 1.7,
                "unit": "inches"
            },
            "weight": {
                "value": 1.6,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 531
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.1,
                "unit": "inches"
            },
            "width": {
                "value": 1.65,
                "unit": "inches"
            },
            "weight": {
                "value": 1.94447715084,
                "unit": "pounds"
            },
            "height": {
                "value": 7.78,
                "unit": "inches"
            }
        },
        "pages": 1440
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.1,
                "unit": "inches"
            },
            "width": {
                "value": 0.64,
                "unit": "inches"
            },
            "weight": {
                "value": 0.74,
                "unit": "pounds"
            },
            "height": {
                "value": 9.15,
                "unit": "inches"
            }
        },
        "pages": 256
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.3,
                "unit": "inches"
            },
            "width": {
                "value": 1.15,
                "unit": "inches"
            },
            "weight": {
                "value": 0.58,
                "unit": "pounds"
            },
            "height": {
                "value": 7.6,
                "unit": "inches"
            }
        },
        "pages": 208
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.03936,
                "unit": "inches"
            },
            "width": {
                "value": 0.59055,
                "unit": "inches"
            },
            "weight": {
                "value": 0.68784225744,
                "unit": "pounds"
            },
            "height": {
                "value": 7.75589,
                "unit": "inches"
            }
        },
        "pages": 288
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.19,
                "unit": "inches"
            },
            "width": {
                "value": 0.81,
                "unit": "inches"
            },
            "weight": {
                "value": 0.86862131228,
                "unit": "pounds"
            },
            "height": {
                "value": 7.97,
                "unit": "inches"
            }
        },
        "pages": 384
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.23,
                "unit": "inches"
            },
            "width": {
                "value": 1.19,
                "unit": "inches"
            },
            "weight": {
                "value": 1.81219979364,
                "unit": "pounds"
            },
            "height": {
                "value": 8.47,
                "unit": "inches"
            }
        },
        "pages": 880
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.23,
                "unit": "inches"
            },
            "width": {
                "value": 0.68,
                "unit": "inches"
            },
            "weight": {
                "value": 0.56,
                "unit": "pounds"
            },
            "height": {
                "value": 7.95,
                "unit": "inches"
            }
        },
        "pages": 291
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.1,
                "unit": "inches"
            },
            "width": {
                "value": 1,
                "unit": "inches"
            },
            "weight": {
                "value": 1.00089866948,
                "unit": "pounds"
            },
            "height": {
                "value": 9.2,
                "unit": "inches"
            }
        },
        "pages": 480
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.15747,
                "unit": "inches"
            },
            "width": {
                "value": 1.81102,
                "unit": "inches"
            },
            "weight": {
                "value": 1.8408598877,
                "unit": "pounds"
            },
            "height": {
                "value": 7.874,
                "unit": "inches"
            }
        },
        "pages": 1148
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.499989,
                "unit": "inches"
            },
            "width": {
                "value": 0.97901379,
                "unit": "inches"
            },
            "weight": {
                "value": 0.85,
                "unit": "pounds"
            },
            "height": {
                "value": 8.2499835,
                "unit": "inches"
            }
        },
        "pages": 272
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5,
                "unit": "inches"
            },
            "width": {
                "value": 0.8,
                "unit": "inches"
            },
            "weight": {
                "value": 0.48060773116,
                "unit": "pounds"
            },
            "height": {
                "value": 8,
                "unit": "inches"
            }
        },
        "pages": 224
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 1,
                "unit": "inches"
            },
            "weight": {
                "value": 0.95,
                "unit": "pounds"
            },
            "height": {
                "value": 8.75,
                "unit": "inches"
            }
        },
        "pages": 291
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.25,
                "unit": "inches"
            },
            "width": {
                "value": 1,
                "unit": "inches"
            },
            "weight": {
                "value": 0.8,
                "unit": "pounds"
            },
            "height": {
                "value": 8.25,
                "unit": "inches"
            }
        },
        "pages": 416
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.21,
                "unit": "inches"
            },
            "width": {
                "value": 0.7,
                "unit": "inches"
            },
            "weight": {
                "value": 0.54895103238,
                "unit": "pounds"
            },
            "height": {
                "value": 7.95,
                "unit": "inches"
            }
        },
        "pages": 304
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.13,
                "unit": "inches"
            },
            "width": {
                "value": 0.87,
                "unit": "inches"
            },
            "weight": {
                "value": 0.8377565956,
                "unit": "pounds"
            },
            "height": {
                "value": 7.96,
                "unit": "inches"
            }
        },
        "pages": 384
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 1.63,
                "unit": "inches"
            },
            "weight": {
                "value": 2.57499922016,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 684
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 8.17,
                "unit": "inches"
            },
            "width": {
                "value": 6.1,
                "unit": "inches"
            },
            "weight": {
                "value": 0.78925489796,
                "unit": "pounds"
            },
            "height": {
                "value": 0.96,
                "unit": "inches"
            }
        },
        "pages": 240
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.79526,
                "unit": "inches"
            },
            "width": {
                "value": 5.39369,
                "unit": "inches"
            },
            "weight": {
                "value": 0.55,
                "unit": "pounds"
            },
            "height": {
                "value": 0.51181,
                "unit": "inches"
            }
        },
        "pages": 263
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.5,
                "unit": "inches"
            },
            "width": {
                "value": 1.25,
                "unit": "inches"
            },
            "weight": {
                "value": 1.60496526736,
                "unit": "pounds"
            },
            "height": {
                "value": 9.25,
                "unit": "inches"
            }
        },
        "pages": 304
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 0,
                "unit": "inches"
            },
            "width": {
                "value": 0,
                "unit": "inches"
            },
            "weight": {
                "value": 1.35,
                "unit": "pounds"
            },
            "height": {
                "value": 0,
                "unit": "inches"
            }
        },
        "pages": 320
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 0.9,
                "unit": "inches"
            },
            "width": {
                "value": 7.7,
                "unit": "inches"
            },
            "weight": {
                "value": 1.87833847224,
                "unit": "pounds"
            },
            "height": {
                "value": 9.2,
                "unit": "inches"
            }
        },
        "pages": 224
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.125,
                "unit": "inches"
            },
            "width": {
                "value": 1.7,
                "unit": "inches"
            },
            "weight": {
                "value": 2.7006627095,
                "unit": "pounds"
            },
            "height": {
                "value": 9.25,
                "unit": "inches"
            }
        },
        "pages": 944
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.3,
                "unit": "inches"
            },
            "width": {
                "value": 0.65,
                "unit": "inches"
            },
            "weight": {
                "value": 0.7495716908,
                "unit": "pounds"
            },
            "height": {
                "value": 7.25,
                "unit": "inches"
            }
        },
        "pages": 128
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.5,
                "unit": "inches"
            },
            "width": {
                "value": 0.78,
                "unit": "inches"
            },
            "weight": {
                "value": 0.5621787681,
                "unit": "pounds"
            },
            "height": {
                "value": 8.25,
                "unit": "inches"
            }
        },
        "pages": 273
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.98,
                "unit": "inches"
            },
            "width": {
                "value": 1.08,
                "unit": "inches"
            },
            "weight": {
                "value": 1.17,
                "unit": "pounds"
            },
            "height": {
                "value": 8.96,
                "unit": "inches"
            }
        },
        "pages": 341
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 0.8,
                "unit": "inches"
            },
            "weight": {
                "value": 0.85,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 320
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.25,
                "unit": "inches"
            },
            "width": {
                "value": 0.59,
                "unit": "inches"
            },
            "weight": {
                "value": 0.61,
                "unit": "pounds"
            },
            "height": {
                "value": 8,
                "unit": "inches"
            }
        },
        "pages": 236
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.75,
                "unit": "inches"
            },
            "width": {
                "value": 0.75,
                "unit": "inches"
            },
            "weight": {
                "value": 0.8157103694,
                "unit": "pounds"
            },
            "height": {
                "value": 8.5,
                "unit": "inches"
            }
        },
        "pages": 201
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.25,
                "unit": "inches"
            },
            "width": {
                "value": 1,
                "unit": "inches"
            },
            "weight": {
                "value": 0.8,
                "unit": "pounds"
            },
            "height": {
                "value": 9.25,
                "unit": "inches"
            }
        },
        "pages": 256
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.5,
                "unit": "inches"
            },
            "width": {
                "value": 1.25,
                "unit": "inches"
            },
            "weight": {
                "value": 1.05,
                "unit": "pounds"
            },
            "height": {
                "value": 9.5,
                "unit": "inches"
            }
        },
        "pages": 288
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.5,
                "unit": "inches"
            },
            "width": {
                "value": 0.7,
                "unit": "inches"
            },
            "weight": {
                "value": 0.75,
                "unit": "pounds"
            },
            "height": {
                "value": 8.4,
                "unit": "inches"
            }
        },
        "pages": 240
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.2,
                "unit": "inches"
            },
            "width": {
                "value": 0.65,
                "unit": "inches"
            },
            "weight": {
                "value": 0.45,
                "unit": "pounds"
            },
            "height": {
                "value": 8,
                "unit": "inches"
            }
        },
        "pages": 256
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.07,
                "unit": "inches"
            },
            "width": {
                "value": 0.53,
                "unit": "inches"
            },
            "weight": {
                "value": 0.4629707502,
                "unit": "pounds"
            },
            "height": {
                "value": 7.79,
                "unit": "inches"
            }
        },
        "pages": 192
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.25,
                "unit": "inches"
            },
            "width": {
                "value": 0.5,
                "unit": "inches"
            },
            "weight": {
                "value": 0.7,
                "unit": "pounds"
            },
            "height": {
                "value": 8.5,
                "unit": "inches"
            }
        },
        "pages": 224
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.99211,
                "unit": "inches"
            },
            "width": {
                "value": 9.99998,
                "unit": "inches"
            },
            "weight": {
                "value": 1.10231131,
                "unit": "pounds"
            },
            "height": {
                "value": 1.85039,
                "unit": "inches"
            }
        },
        "pages": 388
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.99211,
                "unit": "inches"
            },
            "width": {
                "value": 9.99998,
                "unit": "inches"
            },
            "weight": {
                "value": 1.10231131,
                "unit": "pounds"
            },
            "height": {
                "value": 1.85039,
                "unit": "inches"
            }
        }
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.19,
                "unit": "inches"
            },
            "width": {
                "value": 0.82,
                "unit": "inches"
            },
            "weight": {
                "value": 0.625,
                "unit": "pounds"
            },
            "height": {
                "value": 7.9,
                "unit": "inches"
            }
        },
        "pages": 400
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.5,
                "unit": "inches"
            },
            "width": {
                "value": 1,
                "unit": "inches"
            },
            "weight": {
                "value": 0.62,
                "unit": "pounds"
            },
            "height": {
                "value": 8.25,
                "unit": "inches"
            }
        },
        "pages": 384
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.28,
                "unit": "inches"
            },
            "width": {
                "value": 0.6,
                "unit": "inches"
            },
            "weight": {
                "value": 0.50706316948873,
                "unit": "pounds"
            },
            "height": {
                "value": 8,
                "unit": "inches"
            }
        },
        "pages": 288
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.6,
                "unit": "inches"
            },
            "width": {
                "value": 1.1,
                "unit": "inches"
            },
            "weight": {
                "value": 0.9,
                "unit": "pounds"
            },
            "height": {
                "value": 8.3,
                "unit": "inches"
            }
        },
        "pages": 464
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.25,
                "unit": "inches"
            },
            "width": {
                "value": 0.75,
                "unit": "inches"
            },
            "weight": {
                "value": 0.90830451944,
                "unit": "pounds"
            },
            "height": {
                "value": 8.5,
                "unit": "inches"
            }
        },
        "pages": 304
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.46,
                "unit": "inches"
            },
            "width": {
                "value": 0.65,
                "unit": "inches"
            },
            "weight": {
                "value": 0.66359140862,
                "unit": "pounds"
            },
            "height": {
                "value": 7.47,
                "unit": "inches"
            }
        },
        "pages": 256
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 1.3,
                "unit": "inches"
            },
            "width": {
                "value": 5.4,
                "unit": "inches"
            },
            "weight": {
                "value": 0.78,
                "unit": "pounds"
            },
            "height": {
                "value": 8.3,
                "unit": "inches"
            }
        },
        "pages": 464
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.79,
                "unit": "inches"
            },
            "width": {
                "value": 1.09,
                "unit": "inches"
            },
            "weight": {
                "value": 2,
                "unit": "pounds"
            },
            "height": {
                "value": 9.3,
                "unit": "inches"
            }
        },
        "pages": 344
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 9.2,
                "unit": "inches"
            },
            "width": {
                "value": 7.6,
                "unit": "inches"
            },
            "weight": {
                "value": 0.00220462262,
                "unit": "pounds"
            },
            "height": {
                "value": 1,
                "unit": "inches"
            }
        },
        "pages": 288
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.25,
                "unit": "inches"
            },
            "width": {
                "value": 2.1,
                "unit": "inches"
            },
            "weight": {
                "value": 3.75,
                "unit": "pounds"
            },
            "height": {
                "value": 9.75,
                "unit": "inches"
            }
        },
        "pages": 1664
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 0.68,
                "unit": "inches"
            },
            "weight": {
                "value": 0.6172943336,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 272
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.5,
                "unit": "inches"
            },
            "width": {
                "value": 0.6,
                "unit": "inches"
            },
            "weight": {
                "value": 0.79,
                "unit": "pounds"
            },
            "height": {
                "value": 8.5,
                "unit": "inches"
            }
        },
        "pages": 233
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 0.53,
                "unit": "inches"
            },
            "weight": {
                "value": 0.7,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 212
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.5,
                "unit": "inches"
            },
            "width": {
                "value": 0.37,
                "unit": "inches"
            },
            "weight": {
                "value": 0.4,
                "unit": "pounds"
            },
            "height": {
                "value": 8.5,
                "unit": "inches"
            }
        },
        "pages": 144
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.3,
                "unit": "inches"
            },
            "width": {
                "value": 0.5,
                "unit": "inches"
            },
            "weight": {
                "value": 0.82011961464,
                "unit": "pounds"
            },
            "height": {
                "value": 9.2,
                "unit": "inches"
            }
        },
        "pages": 288
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 4.48818,
                "unit": "inches"
            },
            "width": {
                "value": 0.7874,
                "unit": "inches"
            },
            "weight": {
                "value": 0.4,
                "unit": "pounds"
            },
            "height": {
                "value": 6.96849,
                "unit": "inches"
            }
        },
        "pages": 288
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 4.5,
                "unit": "inches"
            },
            "width": {
                "value": 0.8,
                "unit": "inches"
            },
            "weight": {
                "value": 0.54454178714,
                "unit": "pounds"
            },
            "height": {
                "value": 6,
                "unit": "inches"
            }
        },
        "pages": 208
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.7952755826,
                "unit": "inches"
            },
            "width": {
                "value": 0.7086614166,
                "unit": "inches"
            },
            "weight": {
                "value": 0.26675933702,
                "unit": "pounds"
            },
            "height": {
                "value": 5.0787401523,
                "unit": "inches"
            }
        },
        "pages": 320
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5,
                "unit": "inches"
            },
            "width": {
                "value": 0.7,
                "unit": "inches"
            },
            "weight": {
                "value": 0.55,
                "unit": "pounds"
            },
            "height": {
                "value": 7,
                "unit": "inches"
            }
        },
        "pages": 128
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.22,
                "unit": "inches"
            },
            "width": {
                "value": 0.73,
                "unit": "inches"
            },
            "weight": {
                "value": 0.53,
                "unit": "pounds"
            },
            "height": {
                "value": 7.56,
                "unit": "inches"
            }
        },
        "pages": 139
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 4.71,
                "unit": "inches"
            },
            "width": {
                "value": 1.04,
                "unit": "inches"
            },
            "weight": {
                "value": 0.7495716908,
                "unit": "pounds"
            },
            "height": {
                "value": 5.91,
                "unit": "inches"
            }
        },
        "pages": 368
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 8,
                "unit": "inches"
            },
            "width": {
                "value": 1.2,
                "unit": "inches"
            },
            "weight": {
                "value": 2.33,
                "unit": "pounds"
            },
            "height": {
                "value": 9.4,
                "unit": "inches"
            }
        },
        "pages": 336
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.01,
                "unit": "inches"
            },
            "width": {
                "value": 0.68,
                "unit": "inches"
            },
            "weight": {
                "value": 12.40982072798,
                "unit": "pounds"
            },
            "height": {
                "value": 10,
                "unit": "inches"
            }
        },
        "pages": 300
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.5,
                "unit": "inches"
            },
            "width": {
                "value": 0.87,
                "unit": "inches"
            },
            "weight": {
                "value": 0.93,
                "unit": "pounds"
            },
            "height": {
                "value": 8.5,
                "unit": "inches"
            }
        },
        "pages": 352
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.78,
                "unit": "inches"
            },
            "width": {
                "value": 1.2,
                "unit": "inches"
            },
            "weight": {
                "value": 0.9875,
                "unit": "pounds"
            },
            "height": {
                "value": 8.52,
                "unit": "inches"
            }
        },
        "pages": 305
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.299198,
                "unit": "inches"
            },
            "width": {
                "value": 1.401572,
                "unit": "inches"
            },
            "weight": {
                "value": 2.44933573082,
                "unit": "pounds"
            },
            "height": {
                "value": 9.200769,
                "unit": "inches"
            }
        },
        "pages": 648
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.41,
                "unit": "inches"
            },
            "width": {
                "value": 1.25,
                "unit": "inches"
            },
            "weight": {
                "value": 1.36,
                "unit": "pounds"
            },
            "height": {
                "value": 9.56,
                "unit": "inches"
            }
        },
        "pages": 382
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.75,
                "unit": "inches"
            },
            "width": {
                "value": 0.328,
                "unit": "inches"
            },
            "weight": {
                "value": 0.44974301448,
                "unit": "pounds"
            },
            "height": {
                "value": 7.5,
                "unit": "inches"
            }
        },
        "pages": 96
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.85,
                "unit": "inches"
            },
            "width": {
                "value": 5.15,
                "unit": "inches"
            },
            "weight": {
                "value": 0.57540650382,
                "unit": "pounds"
            },
            "height": {
                "value": 0.65,
                "unit": "inches"
            }
        },
        "pages": 336
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.74,
                "unit": "inches"
            },
            "width": {
                "value": 5.1,
                "unit": "inches"
            },
            "weight": {
                "value": 0.75,
                "unit": "pounds"
            },
            "height": {
                "value": 0.88,
                "unit": "inches"
            }
        },
        "pages": 304
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.4,
                "unit": "inches"
            },
            "width": {
                "value": 0.5,
                "unit": "inches"
            },
            "weight": {
                "value": 0.34,
                "unit": "pounds"
            },
            "height": {
                "value": 7.3,
                "unit": "inches"
            }
        },
        "pages": 49
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.874,
                "unit": "inches"
            },
            "width": {
                "value": 5.5118,
                "unit": "inches"
            },
            "weight": {
                "value": 2.1605300265172,
                "unit": "pounds"
            },
            "height": {
                "value": 1.5748,
                "unit": "inches"
            }
        },
        "pages": 758
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 9,
                "unit": "inches"
            },
            "width": {
                "value": 8,
                "unit": "inches"
            },
            "weight": {
                "value": 3.4612575134,
                "unit": "pounds"
            },
            "height": {
                "value": 1.25,
                "unit": "inches"
            }
        },
        "pages": 864
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.85,
                "unit": "inches"
            },
            "width": {
                "value": 2,
                "unit": "inches"
            },
            "weight": {
                "value": 3.27,
                "unit": "pounds"
            },
            "height": {
                "value": 9.35,
                "unit": "inches"
            }
        },
        "pages": 800
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 8.75,
                "unit": "inches"
            },
            "width": {
                "value": 1.25,
                "unit": "inches"
            },
            "weight": {
                "value": 1.75,
                "unit": "pounds"
            },
            "height": {
                "value": 10,
                "unit": "inches"
            }
        },
        "pages": 576
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7,
                "unit": "inches"
            },
            "width": {
                "value": 1.59,
                "unit": "inches"
            },
            "weight": {
                "value": 2.69,
                "unit": "pounds"
            },
            "height": {
                "value": 10,
                "unit": "inches"
            }
        },
        "pages": 687
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.5,
                "unit": "inches"
            },
            "width": {
                "value": 1.5,
                "unit": "inches"
            },
            "weight": {
                "value": 3.2,
                "unit": "pounds"
            },
            "height": {
                "value": 9.25,
                "unit": "inches"
            }
        },
        "pages": 853
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7,
                "unit": "inches"
            },
            "width": {
                "value": 1.59,
                "unit": "inches"
            },
            "weight": {
                "value": 2.69,
                "unit": "pounds"
            },
            "height": {
                "value": 10,
                "unit": "inches"
            }
        },
        "pages": 687
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 8,
                "unit": "inches"
            },
            "width": {
                "value": 0.6,
                "unit": "inches"
            },
            "weight": {
                "value": 1.74826573766,
                "unit": "pounds"
            },
            "height": {
                "value": 10,
                "unit": "inches"
            }
        },
        "pages": 432
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 8,
                "unit": "inches"
            },
            "width": {
                "value": 1.24,
                "unit": "inches"
            },
            "weight": {
                "value": 3.04458383822,
                "unit": "pounds"
            },
            "height": {
                "value": 10,
                "unit": "inches"
            }
        },
        "pages": 506
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 8.75,
                "unit": "inches"
            },
            "width": {
                "value": 1.25,
                "unit": "inches"
            },
            "weight": {
                "value": 4.55915957816,
                "unit": "pounds"
            },
            "height": {
                "value": 11.25,
                "unit": "inches"
            }
        },
        "pages": 864
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.3,
                "unit": "inches"
            },
            "width": {
                "value": 1.1,
                "unit": "inches"
            },
            "weight": {
                "value": 0.9259415004,
                "unit": "pounds"
            },
            "height": {
                "value": 7.95,
                "unit": "inches"
            }
        },
        "pages": 512
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.18,
                "unit": "inches"
            },
            "width": {
                "value": 0.7,
                "unit": "inches"
            },
            "weight": {
                "value": 0.49,
                "unit": "pounds"
            },
            "height": {
                "value": 7.96,
                "unit": "inches"
            }
        },
        "pages": 304
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.5,
                "unit": "inches"
            },
            "width": {
                "value": 0.68,
                "unit": "inches"
            },
            "weight": {
                "value": 0.55776952286,
                "unit": "pounds"
            },
            "height": {
                "value": 8.4375,
                "unit": "inches"
            }
        },
        "pages": 272
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.15,
                "unit": "inches"
            },
            "width": {
                "value": 0.81,
                "unit": "inches"
            },
            "weight": {
                "value": 0.64,
                "unit": "pounds"
            },
            "height": {
                "value": 7.5,
                "unit": "inches"
            }
        },
        "pages": 215
    },
    {
        "dimensions_structured": {
            "weight": {
                "value": 0.6,
                "unit": "pounds"
            }
        },
        "pages": 192
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 4.1875,
                "unit": "inches"
            },
            "width": {
                "value": 0.9,
                "unit": "inches"
            },
            "weight": {
                "value": 0.44533376924,
                "unit": "pounds"
            },
            "height": {
                "value": 6.75,
                "unit": "inches"
            }
        },
        "pages": 342
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 8.04,
                "unit": "inches"
            },
            "width": {
                "value": 0.93,
                "unit": "inches"
            },
            "weight": {
                "value": 2.75798289762,
                "unit": "pounds"
            },
            "height": {
                "value": 10.72,
                "unit": "inches"
            }
        },
        "pages": 548
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.02361,
                "unit": "inches"
            },
            "width": {
                "value": 1.25984,
                "unit": "inches"
            },
            "weight": {
                "value": 1.15081300764,
                "unit": "pounds"
            },
            "height": {
                "value": 9.13384,
                "unit": "inches"
            }
        },
        "pages": 413
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6,
                "unit": "inches"
            },
            "width": {
                "value": 1,
                "unit": "inches"
            },
            "weight": {
                "value": 0.75,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 368
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.75,
                "unit": "inches"
            },
            "width": {
                "value": 1.5,
                "unit": "inches"
            },
            "weight": {
                "value": 1.78794894482,
                "unit": "pounds"
            },
            "height": {
                "value": 8.75,
                "unit": "inches"
            }
        },
        "pages": 662
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 5.75,
                "unit": "inches"
            },
            "width": {
                "value": 1.25,
                "unit": "inches"
            },
            "weight": {
                "value": 1.02,
                "unit": "pounds"
            },
            "height": {
                "value": 8.75,
                "unit": "inches"
            }
        },
        "pages": 376
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.125,
                "unit": "inches"
            },
            "width": {
                "value": 1.4,
                "unit": "inches"
            },
            "weight": {
                "value": 1.65,
                "unit": "pounds"
            },
            "height": {
                "value": 9.25,
                "unit": "inches"
            }
        },
        "pages": 578
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.25,
                "unit": "inches"
            },
            "width": {
                "value": 1.5,
                "unit": "inches"
            },
            "weight": {
                "value": 2.50004205108,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 948
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 9.09842518757,
                "unit": "inches"
            },
            "width": {
                "value": 6.35826771005,
                "unit": "inches"
            },
            "weight": {
                "value": 1.5,
                "unit": "pounds"
            },
            "height": {
                "value": 1.27165354201,
                "unit": "inches"
            }
        },
        "pages": 452
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.8,
                "unit": "inches"
            },
            "width": {
                "value": 1.1,
                "unit": "inches"
            },
            "weight": {
                "value": 1.873929227,
                "unit": "pounds"
            },
            "height": {
                "value": 9.3,
                "unit": "inches"
            }
        },
        "pages": 528
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 6.27,
                "unit": "inches"
            },
            "width": {
                "value": 1.12,
                "unit": "inches"
            },
            "weight": {
                "value": 1.1,
                "unit": "pounds"
            },
            "height": {
                "value": 9.29,
                "unit": "inches"
            }
        },
        "pages": 320
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.25,
                "unit": "inches"
            },
            "width": {
                "value": 2.25,
                "unit": "inches"
            },
            "weight": {
                "value": 3,
                "unit": "pounds"
            },
            "height": {
                "value": 9,
                "unit": "inches"
            }
        },
        "pages": 1248
    },
    {
        "dimensions_structured": {
            "length": {
                "value": 7.75,
                "unit": "inches"
            },
            "width": {
                "value": 1.5,
                "unit": "inches"
            },
            "weight": {
                "value": 3.3,
                "unit": "pounds"
            },
            "height": {
                "value": 9.25,
                "unit": "inches"
            }
        },
        "pages": 960
    }
];


// const canvasEl = document.getElementById('world')

function setup() {
    // noCanvas();
    engine = Matter.Engine.create();
    world = engine.world;
    render = Matter.Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 600,
            height: 600,
            outline: true,
            wireframes: false,
            background: 'transparent',
            showAngleIndicator: false,
            // canvas: canvasEl,
        },
    });

    canvas = render.canvas;
    canvas.setAttribute('id', 'bookshelf-canvas');

    canvas.style.position = 'relative';

    let canvasBounds = canvas.getBoundingClientRect();

    bookWeightsViewContainer.style.position = 'absolute';
    bookWeightsViewContainer.style.top = canvasBounds.top + canvasBounds.height + 10 + 'px';
    bookWeightsViewContainer.style.left = canvasBounds.x + 'px';
    bookWeightsViewContainer.style.width = canvas.width + 'px';
    bookWeightsViewContainer.style.height = 30 + 'px';
    bookWeightsViewContainer.style.outline = '1px solid gray';

    document.body.appendChild(bookWeightsViewContainer);

    box = Bodies.rectangle(100, 100, 16, 80, {render: {text: {content: 'box'}}});

    box.render.strokeStyle = 'black';
    box.render.lineWidth = 10;


    Composite.add(engine.world, box);


    circle1 = Bodies.circle(220, 100, 75, {
        density: 0.042,
        friction: 0.1,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
            fillStyle: 'red',
            strokeStyle: 'black',
            strokeWidth: '5px'
        }
    });

    //Composite.add(engine.world, circle1);

    let floor = Bodies.rectangle(300, 600, 600, 60, {isStatic: true});
    Composite.add(engine.world, floor);

    let wall_left = Bodies.rectangle(3, 300, 6, 600, {isStatic: true});
    let wall_right = Bodies.rectangle(597, 300, 6, 600, {isStatic: true});
    Composite.add(engine.world, wall_left);
    Composite.add(engine.world, wall_right);


    Render.run(render);

    runner = Runner.create();
    Runner.run(runner, engine);

    // delay 3 seconds then add a new circle
    setTimeout(() => {
        circle2 = Bodies.circle(220, 100, 75, {
            density: 0.042,
            friction: 0.1,
            frictionAir: 0.00001,
            restitution: 0.8,
            render: {
                fillStyle: 'blue',
                strokeStyle: 'black',
                lineWidth: 1
            }
        });
        Composite.add(engine.world, circle2);
        // delay 9 seconds then add a new box
        setTimeout(() => {
            // Composite.add(engine.world, circle1);
            // Composite.remove(engine.world, circle2);
            Composite.remove(engine.world, circle2);
            addFiveBooks();
        }, 2000);
    }, 3000);

    // delay 6 seconds then add a remove the circles and box
    setTimeout(() => {
        Composite.remove(engine.world, box);
        Composite.remove(engine.world, circle1);
    }, 5000);

}


// Custom render function
const customRender = (event) => {
    const context = render.context;
    const bodies = Composite.allBodies(engine.world);

    // Clear the canvas
    Render.startViewTransform(render);
    context.clearRect(0, 0, render.canvas.width, render.canvas.height);
    Render.endViewTransform(render);

    // Draw each body
    bodies.forEach(body => {
        // Draw the shape
        context.beginPath();
        body.vertices.forEach((vertex, i) => {
            if (i === 0) {
                context.moveTo(vertex.x, vertex.y);
            } else {
                context.lineTo(vertex.x, vertex.y);
            }
        });
        context.closePath();
        context.fillStyle = body.render.fillStyle || 'gray';
        context.fill();

        // Draw the text if it exists
        if (body.render.text) {
            context.font = `${body.render.text.size}px Arial`;
            context.fillStyle = body.render.text.color || 'black';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(body.render.text.content, body.position.x, body.position.y);
        }
    });
};


function addFiveBooks() {
    let width = 20 + (Math.floor(Math.random() * 8) - Math.floor(Math.random() * 8))
    let currentX = 100;
    let mass;

    for (let i = 0; i < 21; i++) {
        mass = booksData[i].dimensions_structured.weight.value ? Math.round(booksData[i].dimensions_structured.weight.value * 100) / 100 : false;
        createBooks(width, 100 + Math.floor(Math.random() * 8), currentX, 100, mass);
        currentX += width + 4;
    }
}

function createBooks(width, height, x, y, mass) {
    let book = Bodies.rectangle(x, y, width, height);

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let bookColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    book.render.fillStyle = bookColor;
    book.render.lineWidth = 2;
    book.render.outline = true;


    if (mass) {
        Matter.Body.setMass(book, mass);
        book.render.text = {content: mass + ' lbs', color: 'black'};

        const weightLabel = document.createElement('div');
        weightLabel.innerHTML = mass + ' lbs';
        weightLabel.style.position = 'absolute';
        weightLabel.style.top = 2 + 'px';
        weightLabel.style.left = x + 'px';
        weightLabel.style.color = 'black';
        weightLabel.style.width = width + 'px';
        weightLabel.style.height = 30 + 'px';
        weightLabel.style.textAlign = 'center';
        weightLabel.style.fontSize = '10px';
        weightLabel.style.marginLeft = '-' + width / 2 + 'px';
        weightLabel.style.backgroundColor = 'rgba(' + r + ',' + g + ',' + b + ', 0.2)';
        bookWeightsViewContainer.appendChild(weightLabel);
    }
    Composite.add(engine.world, book);

    // Replace the default render with the custom render

}


function createBalls(radius, x, y, mass) {
    let ball = Bodies.circle(x, y, radius);

    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let bookColor = 'rgb(' + r + ',' + g + ',' + b + ')';

    ball.render.fillStyle = bookColor;
    ball.render.lineWidth = 2;
    ball.render.outline = true;


    if (mass) {
        Matter.Body.setMass(ball, mass);
        ball.render.text = {content: mass + ' lbs', color: 'black'};

        const weightLabel = document.createElement('div');
        weightLabel.innerHTML = mass + ' lbs';
        weightLabel.style.position = 'absolute';
        weightLabel.style.top = 2 + 'px';
        weightLabel.style.left = x + 'px';
        weightLabel.style.color = 'black';
        weightLabel.style.width = width + 'px';
        weightLabel.style.height = 30 + 'px';
        weightLabel.style.textAlign = 'center';
        weightLabel.style.fontSize = '10px';
        weightLabel.style.marginLeft = '-' + width / 2 + 'px';
        weightLabel.style.backgroundColor = 'rgba(' + r + ',' + g + ',' + b + ', 0.2)';
        bookWeightsViewContainer.appendChild(weightLabel);
    }
    Composite.add(engine.world, ball);
}

window.addEventListener('load', function () {
    setup();
});


/*********/

const fileInput = document.getElementById("csvFile");

let data = [ [], function (data) {
    this[0] = data;
} ];

fileInput.addEventListener("change", function () {
    const file = fileInput.files[0];
    let returnedData = [];
    if (file && file.type === "text/csv") {
        data[1](handleCsvFile(file) || returnedData);

    } else {
        alert("Please select a CSV file.");
    }
});

function handleCsvFile(file) {

    console.log("CSV file has been selected: " + file.name);

    const reader = new FileReader();
    let result = [];


    function csvToJson(text, quoteChar = '"', delimiter = ",") {
        text = text.trim()
        let rows = text.split("\n")
        let headers = rows[0].split(",")

        const regex = new RegExp(`\\s*(${quoteChar})?(.*?)\\1\\s*(?:${delimiter}|$)`, "gs")

        const match = (line) => {
            const matches = [...line.matchAll(regex)].map((m) => m[2])
            // Ensure matches length matches headers length by padding with null values
            const paddedMatches = Array.from({length: headers.length}, (_, i) => matches[i] ?? null)
            return paddedMatches
        }

        let lines = text.split("\n")
        const heads = headers ?? match(lines.shift())
        lines = lines.slice(1)

        return lines.map((line) => {
            return match(line).reduce((acc, cur, i) => {
                // replace blank matches with `null`
                const val = cur === null || cur.length <= 0 ? null : Number(cur) || cur
                const key = heads[i] ?? `{i}`
                return {...acc, [key]: val}
            }, {})
        })
    }

    function addDrops (amount, is_positive, last_drop_time, last_drop_radius) {

    }


    reader.onload = function (e) {

        console.log("Reading file...");
        console.log(data);

        const csv = e.target.result;

        const json = csvToJson(csv);

        console.log(json);

        let current_amount = 0;
        let current_radius = 0;
        let current_is_positive = false;
        let current_time = 0;
        let last_drop_time = 0;
        let last_drop_radius = 0;

        let current_delay = 0;

        let current_list = {}


        for (let i = 0; i < 10; i++) {
            if (json[i]["Amount"]) {
                console.log(json[i]);
                console.log(json[i]["Amount"]);
                console.log(json[i]["Posting Date"]);
                console.log("Posting Date");
            } else if (json[i]['"Amount"']) {
                console.log(json[i]);
                console.log(json[i]['"Amount"']);
                console.log(json[i]['"Posting Date"']);
                console.log('"Posting Date"');

                // parse the Posting Date and save as current_time
                const current_date = new Date(Date.parse(json[i]['"Posting Date"']));

                console.log(current_date);

                if (current_list[current_date.toDateString()]) {
                    if (last_drop_time) {
                        current_delay = last_drop_time - current_date.getDate();
                        last_drop_time = current_date.getDate();
                    } else {
                        last_drop_time = current_date.getDate();
                    }
                    current_list[current_date.toDateString()].push({
                        "radius10x":
                            (Math.round(Math.sqrt(Math.abs(Math.round(Number(json[i]['"Amount"']) * (
                                100 / 3.14)) / 100)) * 1000) / 100),
                        "data":
                            `amount: ${json[i]['"Amount"']}; current_delay: ${current_delay}; date: ${last_drop_time}`
                    });

                    console.log(current_date.getDate())
                } else {
                    if (last_drop_time) {
                        current_delay = last_drop_time - current_date.getDate();
                        last_drop_time = current_date.getDate();

                        console.log(current_date.getDate())
                    } else {

                        last_drop_time = current_date.getDate();


                        console.log(current_date.getDate())

                        current_list[current_date.toDateString()] = [{
                            "radius10x":
                                (Math.round(Math.sqrt(Math.abs(Math.round(Number(json[i]['"Amount"']) * (
                                    100 / 3.14)) / 100)) * 1000) / 100),
                            "data":
                                "" + `amount: ${json[i]['"Amount"']}; current_delay: ${current_delay}; date: ${last_drop_time}`
                        }];

                        console.log(current_date.getDate())
                    }
                }
            }
        }

        console.log(current_list);

        let temp = [];

        for (let key in current_list) {
            temp.push(current_list[key]);
        }




        let temp_reversed = temp.reverse();
        /*
            for (let i = 0; i < temp_reversed.length; i++) {
            for (let j = 0; j < temp_reversed[i].length; j++) {
            if (j) {
            setTimeout(() => {
            console.log(temp_reversed[i][j]);
        }, 0);
        } else {
            setTimeout(() => {
            console.log(temp_reversed[i][j]);
        }, 0);
        }
        }
        }
        */


        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < temp_reversed.length; j++) {
                // TODO: at the end of the timeout queue, add 4 seconds and then call addCircle
                setTimeout()
            }
        }

        /*
         const lines = csv.split("\n");
         const headers = lines[0].split(",");

         for (let i = 1; i < lines.length; i++) {
             const obj = {};
             const currentline = lines[i].split(",");

             for (let j = 0; j < headers.length; j++) {
                 obj[headers[j]] = currentline[j];
             }

             result.push(obj);
         }*/

        result = json;

        // delay 3 seconds, then download csv file
        setTimeout(() => {
            //downloadCsv(result);
        }, 3000);
    };


    reader.readAsText(file);


    reader.onerror = function () {
        alert("Failed to read the file.");
    };
    // when mouse click, console log the data
    /*document.addEventListener('click', function() {
        console.log(data[0]);

        const firstHundred = data.slice(0, 100);

        for (let i = 0; i < firstHundred.length; i++) {
            console.log(firstHundred[i]);

            const num1 = Math.abs(Number(firstHundred[i]["Amount"]));
            const sqrt = Math.sqrt(Math.abs(Number(firstHundred[i]["Amount"])));

            console.log("amt", num1)
            console.log("sqrt", sqrt);
        }
    });*/


    document.addEventListener('click', function() {
        console.log(data[0]);

        const firstHundred = data[0].slice(0, 10);

        for (let i = 0; i < firstHundred.length; i++) {
            console.log(firstHundred[i]);

            const num1 = Math.abs(Number(firstHundred[i]["Amount"]));
            const sqrt = Math.sqrt(Math.abs(Number(firstHundred[i]["Amount"])));

            console.log("amt", num1)
            console.log("sqrt", sqrt);
        }
    });


    return result;
}

// convert json to csv and download csv file
function downloadCsv(json) {
    const replacer = (key, value) => value === null ? '' : value;
    const header = Object.keys(json[0]);
    let csv = json.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    csv.unshift(header.join(','));
    csv = csv.join('\r\n');

    const blob = new Blob([csv], {type: 'text/csv'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', 'data.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
