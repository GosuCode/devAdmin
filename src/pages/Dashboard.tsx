import prism from "../assets/prism.png";
import {
  Chart as ChartJS,
  ChartConfiguration,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import Users from "./Users";
import CalendarAdmin from "../components/Calendar/CalendarAdmin";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

const options: ChartConfiguration["options"] = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const data: ChartConfiguration["data"] = {
  labels,
  datasets: [
    {
      label: "Post",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Views",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

interface Stat {
  Name: string;
  number: string;
}

const Dashboard: React.FC = () => {
  const stats: Stat[] = [
    { Name: "Users", number: "12" },
    { Name: "Post", number: "123" },
    { Name: "Likes", number: "200" },
    { Name: "Views", number: "245" },
  ];
  return (
    <div className="w-full grid place-items-center">
      <div className="w-[90%] mt-24">
        <div className="grid grid-cols-12 px-3 gap-3 md:gap-12 md:px-12 text-black place-items-center">
          {stats.map((val, key) => {
            return (
              <div
                key={key}
                className="bg-white col-span-3 w-full cursor-pointer rounded-lg h-20 grid place-items-center md:shadow-neon shadow-green"
              >
                <span className="font-bold">{val.Name}</span>
                <span>{val.number}</span>
              </div>
            );
          })}
        </div>
        {/* COMMENT TOO LONG in client <br /> */}
        <div className="mt-20">
          <div className="bg-white h-[200px] w-full">
            <Line options={options} data={data} />
          </div>

          <div>
            <h2>Latest Posts</h2>
            <div className="h-[200px] ">
              <img src={prism} alt="prism" className="h-full w-full" />
            </div>
          </div>

          <div>
            <CalendarAdmin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
