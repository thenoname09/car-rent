"use client";
import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Select,
  ListBox,
  TextArea,
  DateField,
  Description,
  FieldError,
} from "@heroui/react";
import React from "react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useState } from "react";

const BookingModal = ({ CarDetails }) => {
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
  } = CarDetails;
  // console.log(CarDetails);

  const [bookingDate, setBookingDate] = useState(null);
  const todayDate = today(getLocalTimeZone());
  const isInvalid = bookingDate !== null && bookingDate.compare(todayDate) < 0;

  const { data: session } = authClient.useSession();
  const user = session?.user;

  

  const handleBooking = async () => {
    // if (!user) {
    //   console.log("User not logged in");
    //   return;
    // }
    const bookingData = {
      userId: user.id,
      userEmail: user.email,

      userImage: user.image,
      userName: user.name,
      carId: _id,
      car_type,
      carImage: image,
      carLocation: location,
      carPrice: price,
      carName: name,
      bookingDate: new Date(bookingDate),
    };
    
    const res= await fetch("http://localhost:4000/bookings",{
        method: 'post',
      headers:{'content-type' : 'application/json' },
      body : JSON.stringify(bookingData)

    })

    const data= await res.json()

console.log(data);




  };
  return (
    <Modal>
      <Button
        isDisabled={availability_status !== "Available"}
        className={`w-full  font-black
                               text-base py-6 rounded-2xl transition-all duration-200
                               shadow-lg shadow-lime-400/30 disabled:opacity-50 ${
                                 availability_status === "Available"
                                   ? "text-white bg-[#526D82] hover:bg-[#4c6475]"
                                   : "bg-[#DDE6ED]  text-black"
                               }`}
      >
        Book Now
      </Button>
      

      
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Booking Form</Modal.Heading>
              <h1 className="text-3xl font-black text-[#252525] mb-2">
                {name}
              </h1>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <div className=" space-y-4">
                    <Select
                      name="availability_status"
                      variant="secondary"
                      isRequired
                      fullWidth
                      placeholder="Select one"
                    >
                      <Label>Driver Needed</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Yes" textValue="yes">
                            Yes
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="No" textValue="no">
                            No
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-4">
                    <DateField
                      isRequired
                      className=""
                      isInvalid={isInvalid}
                      minValue={todayDate}
                      name="date"
                      value={bookingDate}
                      onChange={setBookingDate}
                    >
                      <Label>Booking Date</Label>
                      <DateField.Group variant="secondary">
                        <DateField.Input>
                          {(segment) => <DateField.Segment segment={segment} />}
                        </DateField.Input>
                      </DateField.Group>
                      {isInvalid ? (
                        <FieldError>
                          Date must be today or in the future
                        </FieldError>
                      ) : (
                        <Description className="pl-2">
                          Enter a date from today onwards
                        </Description>
                      )}
                    </DateField>
                  </div>

                  <TextField className="w-full " name="description">
                    <Label>Description</Label>
                    <TextArea
                      variant="secondary"
                      placeholder="Write your message here..."
                      rows={3}
                    />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button
                slot="close"
                variant="secondary"
                className={"text-[#27374D]"}
              >
                Cancel
              </Button>
              <Button
                slot="close"
                onClick={handleBooking}
                className={"bg-[#27374D] text-white hover:bg-[#27374D]/95"}
              >
                Confirm Booking
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
      
    </Modal>
  );
};

export default BookingModal;
