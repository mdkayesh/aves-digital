import ActivityList from "@/components/ActivityList";
import PropertyList from "@/components/PropertyList";
import Stats from "@/components/Stats";
import Steps from "@/components/Steps";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <main className="pt-14 pb-20">
      <section className="container">
        <div className="flex justify-between items-center gap-6 flex-wrap">
          <div className="flex gap-4 items-center">
            <Avatar className="w-12 h-12 sm:w-14 sm:h-14">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
              <h1 className="text-3xl sm:text-4xl font-bold pb-1 gradient-text">
                Good Morning
              </h1>
              <p className="text-sm text-muted-foreground">
                Welcome to your dashboard
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Select defaultValue="last-month">
              <SelectTrigger className="gap-4">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-month">Last Month</SelectItem>
                <SelectItem value="last-week">Last Week</SelectItem>
                <SelectItem value="last-year">Last Year</SelectItem>
              </SelectContent>
            </Select>

            <Button>Analytics</Button>
          </div>
        </div>

        <Stats />

        <div className="grid grid-cols-1 mt-10 gap-5 md:grid-cols-2">
          <div>
            <Steps />
            <PropertyList />
          </div>
          <div>
            <ActivityList />
          </div>
        </div>
      </section>
    </main>
  );
}
