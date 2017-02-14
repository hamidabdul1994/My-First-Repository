var mu =require("mu2");
/*var temp= {
  header: function() {
    return "Colors";
  },
  item: [
      {name: "red", current: true, url: "#Red"},
      {name: "green", current: false, url: "#Green"},
      {name: "blue", current: false, url: "#Blue"}
  ],
  link: function() {
    return this["current"] !== true;
  },
  list: function() {
    return this.item.length !== 0;
  },
  empty: function() {
    return this.item.length === 0;
  }
};*/
var temp = {
  "companyName":"Next Education",
  "engineerList":[
    {"engineerName":"ABC",
      "engineerId":"40001EI",
      "attendanceData":[
        {"date":"26 January 2017","reason":"Not Feeling"},
        {"date":"2 Feb 2017","reason":"Personal Work"}
      ]
    },
      {"engineerName":"XYZ",
        "engineerId":"40002EI",
        "attendanceData":[
          {"date":"26 January 2017","reason":"Not Feeling"},
          {"date":"2 Feb 2017","reason":"Personal Work"}
        ]
      },
        {"engineerName":"LMN",
          "engineerId":"40003EI",
          "attendanceData":[
            {"date":"26 January 2017","reason":"Not Feeling"},
            {"date":"2 Feb 2017","reason":"Personal Work"}
          ]
        },
          {"engineerName":"KYS",
            "engineerId":"40004EI",
            "attendanceData":[
              {"date":"26 January 2017","reason":"Not Feeling"},
              {"date":"2 Feb 2017","reason":"Personal Work"}
            ]
          }
  ]
}
var stream = mu.compileAndRender('dummy.html', temp);
var template = "";
stream.on("data",function (data) {
  template+=data.toString();
});

stream.once("end",function (data) {
  console.log(template);
  /*htmlToPdf.convertHTMLString(template, './attendance/attendance.pdf',
    function (error, success) {
        if (error) {
            console.log('Oh noes! Errorz!');
            console.log(error);
        } else {
            console.log('Woot! Success!');
            console.log(success);
        }
    });*/
    console.log("dome");

})
