export const mockData = {
  xAxis: ['January', 'February', 'March', 'April', 'May', 'June'],
  series: [
    {
      name: 'Mobile',
      data: [80, 200, 120, 190, 130, 140]
    },
    {
      name: 'Desktop',
      data: [186, 305, 237, 73, 209, 214]
    }
  ]
};

export const mockDataSingle = {
  xAxis: ['January', 'February', 'March', 'April', 'May', 'June'],
  series: [
    {
      name: 'Desktop',
      data: [186, 305, 237, 73, 209, 214]
    }
  ]
};

export const mockDataNegatives = {
  yAxis: ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one'],
  series: [
    {
      name: 'Cost',
      data: [-0.07, -0.09, 0.2, 0.44, -0.23, 0.08, -0.17, 0.47, -0.36, 0.18]
    }
  ]
};
