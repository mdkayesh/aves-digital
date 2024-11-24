"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AddPropertySchema, PropertyType } from "./schema";

const categories = [
  { value: "residential", title: "Residential" },
  { value: "commercial", title: "Commercial" },
  { value: "industrial", title: "Industrial" },
  { value: "agricultural", title: "Agricultural" },
  { value: "mixed_use", title: "Mixed-Use" },
  { value: "special_purpose", title: "Special Purpose" },
];

const propertyTypes = [
  { value: "apartment", title: "Apartment" },
  { value: "house", title: "House" },
  { value: "unit", title: "Unit" },
  { value: "commercial", title: "Commercial" },
  { value: "other", title: "Other" },
];

type AddPropertyFormProps = {
  onSubmit: (values: PropertyType) => void;
  // isLoading: boolean;
  // onClose: () => void;
};
const AddPropertyForm = ({ onSubmit: handleSubmit }: AddPropertyFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const ref = useRef<HTMLButtonElement | null>(null);
  // 1. Define your form.
  const form = useForm<PropertyType>({
    resolver: zodResolver(AddPropertySchema),
    defaultValues: {
      title: "",
      category: "",
      propertyType: "apartment",
      rentPrice: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: PropertyType) {
    setIsLoading(true);
    setTimeout(() => {
      // define your submit logic here
      console.log(values);
      handleSubmit({ ...values, id: Date.now() });
      setIsLoading(false);
      ref.current?.click();
    }, 1000);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="gap-4">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rentPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder="Rent Price" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="propertyType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type of Property</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="gap-4">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {propertyTypes.map((property) => (
                        <SelectItem key={property.value} value={property.value}>
                          {property.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rentalStatus"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="gap-4">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="available">
                        <Badge className="bg-green-600">Available</Badge>
                      </SelectItem>
                      <SelectItem value="rented">
                        <Badge>Rented</Badge>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex justify-end gap-4">
          <DialogClose asChild ref={ref}>
            <Button variant={"secondary"}>Cancel</Button>
          </DialogClose>
          <Button isLoading={isLoading}>
            <Plus size={28} />
            <span>Add</span>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default AddPropertyForm;
