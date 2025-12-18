import Chart from 'react-apexcharts';

const options = {
  labels: ['Expense', 'Income'],
  colors: ['#b300ff', '#ff009d'],
  chart: {
    width: '50px',
  },
  states: {
    hover: {
      filter: {
        type: 'none',
      },
    },
  },
  legend: {
    show: 'false',
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ['#b300ff', '#ff009d'],
  },
  tooltip: {
    enabled: true,
    theme: 'dark',
    stye: {
      fontSize: '12px',
    },
  },
};

function TransactionChart({ income = 100, expense = 500 }) {
  return (
    <Chart
      options={options}
      series={[expense, income]}
      type='pie'
      width={'100%'}
      height={'100%'}
    />
  );
}
export default TransactionChart;
