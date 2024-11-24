import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartLine, CircleAlert } from "lucide-react";
import { Progress } from "./ui/progress";

const stepsData = [
  {
    title: "Set up your calender",
    value: 39,
    icon: <CircleAlert />,
    description: "Set up your calender",
    iconColor: "text-red-800 bg-red-200",
    indicatorColor: "[&_.indicator]:bg-red-800",
  },

  {
    title: "Increase your bookings",
    value: 70,
    icon: <ChartLine />,
    iconColor: "text-green-800 bg-green-200",
    description: "Total sales for the current month",
    indicatorColor: "[&_.indicator]:bg-green-800",
  },
];
const Steps = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Your next steps</h3>
      <div className="grid grid-cols-2 gap-4">
        {stepsData.map((step, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader>
              <div className={`p-3 rounded-lg w-fit ${step.iconColor}`}>
                {step.icon}
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>{step.title}</CardTitle>
              <Progress
                value={step.value}
                className={`mt-4 ${step.indicatorColor}`}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Steps;
