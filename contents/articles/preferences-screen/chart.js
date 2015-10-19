// Data
var data = {
  labels: ['Arcade & Action', 'Books & Reference', 'Casual', 'Comics',
'Communication', 'Entertainment', 'Lifestyle', 'Personalization', 'Photography',
     'Productivity', 'Tools'
   ],
  series: [[13, 15, 14, 22, 22, 64, 15,
       393, 83, 22, 34]]
};


// Create the Barchart
new Chartist.Bar('.ct-chart', data, {
  chartPadding: {
    top: 20,
    right: 30,
    bottom: 30,
    left: 30
  },
  height: '500px',
  fullWidth : true,
  axisY:{
    labelInterpolationFnc: function(value, index) {
      console.log(index + "=>" + value)
      return value % 50 === 0 ? value : null;
    }
  }
  , plugins: [
        Chartist.plugins.ctAxisTitle({
      axisX: {
        axisTitle: "Category",
        axisClass: 'ct-axis-title',
        offset: {
          x: 0,
          y: 50
        },
        textAnchor: 'middle'
      },
      axisY: {
        axisTitle: "Apps",
        axisClass: 'ct-axis-title',
        offset: {
          x: 20,
          y: 10
        },
        textAnchor: 'middle',
        flipTitle: true
      }
    })]
});
