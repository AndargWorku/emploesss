import ReactApexChart from "react-apexcharts";
import { useAppSelector } from "../../../store/hooks";
import { getEmployee } from "../../../store/slice/employeeSlice";

const TasksChart: React.FC = () => {
  const employees = useAppSelector(getEmployee);
  const options = {
    chart: {
      background: "#fff",
      width: "100%",
      zoom: {
        enabled: true,
      },
    },
    xaxis: {
      categories: ["Total"],
    },
  };

  let total: number = 0;
  const series = [
    {
      name: "Net Salary",
      data: [0],
    },
  ];

  /*eslint-disable-next-line*/
  employees.employees.map((employee, index) => {
    total += employee.salary;

    options.xaxis.categories.push(employee.full_name);
    series[0].data.push(employee.salary);

    if (index === employees.employees.length - 1) {
      options.xaxis.categories.push("Total");
      series[0].data.push(total);
      options.xaxis.categories.shift();
      series[0].data.shift();
    }
  });

  return (
    <ReactApexChart type="bar" options={options} series={series} height={350} />
  );
};

export default TasksChart;
