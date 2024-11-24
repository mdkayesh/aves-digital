"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import data from "@/data/properties.json";
import { EllipsisVertical, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import AddPropertyForm from "./forms/add-property-form";
import { PropertyType } from "./forms/add-property-form/schema";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const PropertyList = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);

  useEffect(() => {
    const items = localStorage.getItem("properties");

    const _data = items ? JSON.parse(items) : data;
    setProperties(_data);

    return () => {};
  }, []);

  const handleSubmit = (values: PropertyType) => {
    setProperties((prev) => [...prev, values]);
    localStorage.setItem("properties", JSON.stringify([...properties, values]));
  };

  const handleDelete = (id: number) => {
    const _data = properties.filter((property) => property.id !== id);
    setProperties(_data);
    localStorage.setItem("properties", JSON.stringify(_data));
  };

  // filter the properties
  const handleChange = (value: string) => {
    const items = JSON.parse(
      localStorage.getItem("properties") ?? "[]"
    ) as PropertyType[];

    const _data = items.filter((property) =>
      value === "all" ? true : property.propertyType === value
    );
    setProperties(_data as PropertyType[]);
  };

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <h3 className="text-xl font-semibold flex gap-3 items-center">
          <span>Properties</span>
          <Badge className="bg-green-500">{properties.length}</Badge>
        </h3>
        <div className="flex gap-4 items-center">
          <Select onValueChange={handleChange}>
            <SelectTrigger className="gap-4 w-fit">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus size={28} />
                <span>Add</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add Property</DialogTitle>
                <DialogDescription>Add your property here.</DialogDescription>
              </DialogHeader>
              <AddPropertyForm onSubmit={handleSubmit} />
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="border rounded-lg mt-4 overflow-auto shadow-lg">
        <Table className="">
          <TableHeader className="sticky top-0 left-0">
            <TableRow>
              <TableHead className="pl-4">Property</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right pr-4">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {properties.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6">
                  No properties found.
                </TableCell>
              </TableRow>
            ) : (
              properties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell className="font-medium pl-4">
                    <div className="min-w-[250px]">
                      <p className="line-clamp-1">{property.title}</p>
                      <p className="text-muted-foreground">{property.title}</p>
                    </div>
                  </TableCell>
                  <TableCell>{property.propertyType}</TableCell>
                  <TableCell>
                    <Badge
                      className={`${
                        property.rentalStatus === "available"
                          ? "bg-green-500"
                          : ""
                      } text-xs`}
                    >
                      {property.rentalStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    ${property.rentPrice}
                  </TableCell>

                  <TableCell className="text-right pr-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="text-muted-foreground">
                        <EllipsisVertical size={16} />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem
                          className="text-destructive"
                          onClick={() => handleDelete(property.id)}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PropertyList;
