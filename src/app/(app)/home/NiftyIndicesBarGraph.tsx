"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

const data = [
  { name: "Nifty 50", return: 16 },
  { name: "Nifty 100", return: 16 },
  { name: "Nifty Midcap 150", return: 28 },
  { name: "Nifty Smallcap 250", return: 30 },
  { name: "Nifty Microcap 250", return: 43 },
  { name: "Nifty SME Emerge", return: 66 },
];

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Renders a bar graph displaying the return profile (CAGR) over 5 years
 * for various Nifty indices. The graph is encapsulated within a card
 * component, providing a structured layout with a header and content area.
 * Each bar represents the return percentage of a specific Nifty index,
 * with additional textual labels for clarity. The component is responsive,
 * adapting its size based on the container.
 */

/******  9e3c9dac-0e93-4d2f-91ee-fbcaf72a62b1  *******/
export default function NiftyIndicesBarGraph() {
  return (
    <Card className="w-full max-w-6xl mx-auto bg-white">
      <CardHeader className="bg-[#1fd43a] text-white p-4 rounded-t-lg">
        <CardTitle className="text-2xl font-bold">
          Return Profile (CAGR) - 5 Years
        </CardTitle>
      </CardHeader>
      <CardContent className="p-1 mt-4">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} barGap={2}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              stroke="#8884d8"
              interval={0}
              angle={-45}
              textAnchor="end"
              height={60}
              tick={{ fontSize: 9 }}
            />
            ;
            <YAxis domain={[10, 70]} stroke="#8884d8" />
            <Tooltip />
            <Bar dataKey="return" fill="#22c55e" barSize={45}>
              {data.map((entry, index) => (
                <text
                  key={`label-${index}`}
                  x={entry.return < 35 ? 50 : 20}
                  y={400 - (entry.return - 10) * (400 / 60) - 25}
                  fill="#fff"
                  textAnchor={entry.return < 35 ? "start" : "end"}
                  fontSize={12}
                >
                  {entry.return}%
                </text>
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <div className="p-4 text-right text-sm text-black">
        Nifty Indices as on 31/12/2024
      </div>
    </Card>
  );
}
