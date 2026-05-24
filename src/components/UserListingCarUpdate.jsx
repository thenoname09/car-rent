"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
  Select,
  ListBox,
  TextArea,
} from "@heroui/react";

import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const UserListingCarUpdate = ({carData}) => {
   
     const {
    _id,
    name,
    car_type,
    price,
    description,
    image,
    seat_capacity,
    location,
    availability_status,
    booking_count,
    userName,
  } = carData;
    

    const router = useRouter();

    
      const { data: session } = authClient.useSession();
      const user = session?.user;
    
      const onSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.currentTarget);
    
        const updatedcarinfo = Object.fromEntries(formData.entries());
    
        
    
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/my_car_listing/${_id}`, {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(updatedcarinfo),
        });
        const data = await res.json();
    toast.success('Successfully Edited!')
        if (data) {
               
                redirect("/my-added-cars");
              }
      
       
      };
      
        
    return (
        <Card className="border bg-stone-100 mx-auto w-full max-w-3xl py-10 mt-5 mb-10 ">
            
       
             <Form
               className="flex  w-full  px-2  mx-auto flex-col gap-4"
               onSubmit={onSubmit}
             >
               {/* <TextField
                 isRequired
                 name="name"
                 validate={(value) => {
                   if (value.length < 3) {
                     return "Name must be at least 3 characters";
                   }
                   return null;
                 }}
               >
                 <Label>Name</Label>
                 <Input placeholder="" />
                 <FieldError />
               </TextField> */}
       
               <TextField isRequired name="price" type="number" defaultValue={price}
               >
                 <Label>Daily Rent Price</Label>
                 <Input placeholder="Daily Rent Price" />
                 <FieldError />
               </TextField>
       
               <div className=" space-y-4">
                 <Select name="car_type" fullWidth isRequired placeholder="Select one" defaultValue={car_type} >
                   <Label>Car Type</Label>
                   <Select.Trigger>
                     <Select.Value />
                     <Select.Indicator />
                   </Select.Trigger>
                   <Select.Popover>
                     <ListBox>
                       <ListBox.Item id="SUV" textValue="SUV">
                         SUV
                         <ListBox.ItemIndicator />
                       </ListBox.Item>
                       <ListBox.Item id="Sedan" textValue="Sedan">
                         Sedan
                         <ListBox.ItemIndicator />
                       </ListBox.Item>
                       <ListBox.Item id="Luxury" textValue="Luxury">
                         Luxury
                         <ListBox.ItemIndicator />
                       </ListBox.Item>
                       <ListBox.Item id="Hatchback" textValue="Hatchback">
                         Hatchback
                         <ListBox.ItemIndicator />
                       </ListBox.Item>
                       <ListBox.Item id="Electric" textValue="Electric">
                         Electric
                         <ListBox.ItemIndicator />
                       </ListBox.Item>
       
                       <ListBox.Item id="etc" textValue="etc">
                         etc
                         <ListBox.ItemIndicator />
                       </ListBox.Item>
                     </ListBox>
                   </Select.Popover>
                 </Select>
               </div>
       
               <TextField isRequired name="image" type="text" defaultValue={image}>
                 <Label>Image URL</Label>
                 <Input placeholder="Image URL" />
                 <FieldError />
               </TextField>
       
             
       
               <TextField isRequired name="location" type="text" defaultValue={location}>
                 <Label>Pickup Location</Label>
                 <Input placeholder="Seat Capacity" />
                 <FieldError />
               </TextField>
       
               <TextField className="w-full " name="description" defaultValue={description}>
                 <Label>Description</Label>
                 <TextArea placeholder="Write your message here..." rows={4} />
               </TextField>
               <div className=" space-y-4">
                 <Select
                   name="availability_status"
                   isRequired
                   fullWidth
                   defaultValue={availability_status}
                   placeholder="Select one"
                 >
                   <Label>Availability Status</Label>
                   <Select.Trigger>
                     <Select.Value />
                     <Select.Indicator />
                   </Select.Trigger>
                   <Select.Popover>
                     <ListBox>
                       <ListBox.Item id="Available" textValue="available">
                         Available
                         <ListBox.ItemIndicator />
                       </ListBox.Item>
                       <ListBox.Item id="Unavailable" textValue="unavailable">
                         Unavailable
                         <ListBox.ItemIndicator />
                       </ListBox.Item>
                     </ListBox>
                   </Select.Popover>
                 </Select>
               </div>
       
               <div className="flex flex-col pt-6 md:flex-row gap-3 items-center justify-center">
                 <Button type="submit" className={"  w-full"}>
                   Save
                 </Button>
               </div>
             </Form>
           </Card>
    );
};

export default UserListingCarUpdate;