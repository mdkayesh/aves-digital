import activities from "@/data/activities.json";
import { format, getDate } from "date-fns";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";

// type ActivityStatus = "Completed" | "Pending" | "Resolved";

// interface Activity {
//   id: number;
//   activity: string;
//   dateTime: string; // ISO 8601 date-time format
//   status: ActivityStatus;
//   address: string;
// }

const ActivityList = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold flex gap-3 items-center mb-6">
        <span>New Activity</span>
        <Badge className="bg-green-500">{6}</Badge>
      </h3>

      <ScrollArea className="border rounded-lg h-screen shadow-lg relative">
        <ul>
          {activities.map((a) => (
            <li
              key={a.id}
              className="flex justify-between px-4 py-2 rounded-lg hover:bg-accent"
            >
              <div className="flex gap-4">
                <div className="border rounded-lg overflow-hidden text-center">
                  <p className="bg-muted text-muted-foreground px-3 py-1">
                    {format(a.dateTime, "MMMM").slice(0, 3)}
                  </p>
                  <p className="text-2xl font-semibold py-2 px-3">
                    {getDate(a.dateTime)}
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold line-clamp-1">{a.activity}</h3>
                  <p className="text-sm text-muted-foreground flex gap-2 items-center">
                    <span className="whitespace-nowrap">3h ago</span>
                    <span className="block w-1 h-1 rounded-full bg-muted-foreground" />
                    <span className="line-clamp-1">{a.address}</span>
                  </p>
                  <Badge
                    className={`mt-2 capitalize`}
                    variant={
                      a.status === "completed"
                        ? "success"
                        : a.status === "resolved"
                        ? "destructive"
                        : "default"
                    }
                  >
                    {a.status}
                  </Badge>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default ActivityList;
