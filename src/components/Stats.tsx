import { BadgeCheck, HandCoins, ShoppingBag, Star } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const statsData = [
  {
    title: "Checkins",
    value: "12",
    icon: <BadgeCheck />,
    description: "Total sales for the current month",
  },

  {
    title: "Checkout",
    value: "56",
    icon: <ShoppingBag />,
    description: "Total sales for the current month",
  },
  {
    title: "Earnings",
    value: "$4,356,89",
    icon: <HandCoins />,
    description: "Total sales for the current month",
  },
  {
    title: "Reviews",
    value: "4.4 (3489)",
    icon: <Star />,
    description: "Total sales for the current month",
  },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
      {statsData.map((item, index) => (
        <Card key={index} className="shadow-lg">
          <CardHeader className="flex-row justify-between">
            <p className="text-muted-foreground text-lg">{item.title}</p>
            <div className="">{item.icon}</div>
          </CardHeader>

          <CardContent>
            <CardTitle className="text-3xl font-semibold">
              {item.value}
            </CardTitle>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Stats;
