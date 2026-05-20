"use client";

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

import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";


import { LuCheck } from "react-icons/lu";


export default function  RegisterPage() {

 const router = useRouter();
  const [error, setError] = useState("")
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)

    const addCars = Object.fromEntries(formData.entries())

  
    console.log( error , addCars);

    const res = await fetch("http://localhost:4000/cars_info", {
      method: 'post',
      headers:{'content-type' : 'application/json' },
      body : JSON.stringify(addCars)

    })
    const data = await res.json()

    console.log(data)

    //   if(!error) {
    //    router.refresh()
    //     router.push('/')
    // }
    //    if (error) {
      
    //   setError(error.message || "Registration failed. Please try again.");
    //   return;
    // }
    
//   };
//  const handlGoogleSignIn = async () => {
//     await authClient.signIn.social({
//         provider: 'google'
//     })
  }
  

  return (
    <Card className="border bg-stone-100 mx-auto w-200 py-10 mt-5 mb-10 ">
      
      <Description>
         {error && (
          <p className="text-red-500 text-sm text-center mb-3 px-6 font-semibold">
            {error}
          </p>
        )}
      </Description>

      <Form className="flex  w-full  px-2  mx-auto flex-col gap-4" onSubmit={onSubmit}>
         <TextField
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
          </TextField>

        <TextField isRequired name="Price" type="number">
          <Label>Daily Rent Price</Label>
          <Input placeholder="Daily Rent Price" />
          <FieldError />
        </TextField>

          <div className=" space-y-4">
      <Select name="car_type" fullWidth isRequired placeholder="Select one">
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
            <ListBox.Item id="Electric " textValue="Electric">
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

        <TextField isRequired name="image" type="text">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

        <TextField isRequired name="seat_capacity" type="number">
          <Label>Seat Capacity</Label>
          <Input placeholder="Type Seat Capacity" />
          <FieldError />

        </TextField>
        

        <TextField isRequired name="location" type="text">
          <Label>Pickup Location</Label>
          <Input placeholder="Seat Capacity" />
          <FieldError />
        </TextField>

    <TextField className="w-full " name="description">
      <Label>Description</Label>
      <TextArea placeholder="Write your message here..." rows={4} />
     
    </TextField>
         <div className=" space-y-4">
      <Select name="availability_status"  isRequired fullWidth placeholder="Select one">
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
           
            Add Car
          </Button>
        
        </div>
      </Form>

    </Card>
  );
}