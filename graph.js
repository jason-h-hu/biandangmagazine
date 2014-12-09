$(document).ready(function(){

  var margin = {top: 20, right: 20, bottom: 30, left: 50},
width = 960 - margin.left - margin.right,
height = 400;

  var svg = d3.select("body").selectAll("svg")
    .attr("width", function(){ 
      return width;
    })
    .attr("height", height);

var parseDate = d3.time.format("%m-%Y").parse;

var x = d3.time.scale()
    .range([margin.left, width-margin.right]);

var y = d3.scale.linear()
    .range([height-margin.top - margin.bottom, margin.bottom]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line1 = d3.svg.line()
    .interpolate("basis")  
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.cogs); });

var line2 = d3.svg.line()
    .interpolate("basis")  
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.price); });


  d3.json("data.json", function(error, data) {

    data.forEach(function(d) {
      d.date = parseDate(d.date);
      d.cogs = +d.cogs;
      d.price = +d.price;
    });

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain([d3.min(data, function(d){return d.cogs}), d3.max(data, function(d){ return d.price;})])

    svg.append("path")
        .datum(data.slice(0))
        .attr("class", "line")
        .attr("id", "cogs")
        .attr("d", line1);

    svg.append("path")
        .datum(data.slice(0))
        .attr("class", "line")
        .attr("id", "price")
        .attr("d", line2);

  svg.append("g")
    .append("text")
      .attr("transform", "translate(0 ," + y(data[0].cogs) + ")")
      .attr("dy", ".35em")
      .attr("text-anchor", "start")
      .attr("id", "cogs")
      .text("Cost");

  svg.append("g")
    .append("text")
      .attr("transform", "translate( 0 , " + y(data[0].price) + ")")
      .attr("dy", ".35em")
      .attr("text-anchor", "start")
      .attr("id", "price")
      .text("Value");

  svg.append("g")
    .append("text")
      .attr("transform", "translate(" + margin.left + ", " + (height - margin.bottom)+ ")")
      .attr("dy", ".35em")
      .attr("text-anchor", "start")
      .text("TODAY");

  var tippingPoint = 0;
  for (var i = 0; i < data.length ; i++) {
      var datum = data[i]
      if (datum.price < datum.cogs){
        tippingPoint = datum.date;
        break
      }
  };

  svg.append("g")
    .append("text")
      .attr("transform", function(){
        return "translate(" + x(tippingPoint) + ", " + (height - margin.bottom)+ ")"
      })
      .attr("dy", ".35em")
      .attr("text-anchor", "start")
      .text(tippingPoint.getFullYear());

  var focus = svg.append("g")
    .attr("class","focus")
    var cogsFocus = focus.append("g")
      .attr("id", "cogs")
      .attr("class", "focus")
      // .style("display", "none");

    var priceFocus = focus.append("g")
    .attr("id", "price")
      .attr("class", "focus")

    var dateFocus = focus.append("g")
    .attr("id", "date")
      .attr("class", "focus")

  cogsFocus.append("circle")
    .attr("r", 10);

  priceFocus.append("circle")
    .attr("r", 10);

  cogsFocus.append("text")
    .attr("y", 20)
    .attr("dy", ".35em");

  priceFocus.append("text")
    .attr("y", -20)
    .attr("dy", ".35em");

  dateFocus.append("text")
    .attr("dy", ".35em");

  svg.append("rect")
    .attr("class", "overlay")
    .attr("width", width)
    .attr("height", height)
    .on("mouseover", function() { focus.style("display", null); })
    .on("mouseout", function() { focus.style("display", "none"); })
    .on("mousemove", mousemove);

  var bisectDate = d3.bisector(function(d) { return d.date; }).left;
  function mousemove() {
    var x0 = x.invert(d3.mouse(this)[0]),
        i = bisectDate(data, x0, 1),
        d0 = data[i - 1],
        d1 = data[i],
        d = x0 - d0.date > d1.date - x0 ? d1 : d0;
    priceFocus.attr("transform", "translate(" + x(d.date) + "," + y(d.price) + ")");
    priceFocus.select("text").text("$" + Math.round(d.price * 100) / 100 );

    cogsFocus.attr("transform", "translate(" + x(d.date) + "," + y(d.cogs) + ")");
    cogsFocus.select("text").text("$" + Math.round(d.cogs * 100) / 100 );

    dateFocus.attr("transform", "translate(" + x(d.date) + "," + (height - margin.bottom) + ")");
    dateFocus.select("text").text(d.date.getFullYear());

  }

  });


})

