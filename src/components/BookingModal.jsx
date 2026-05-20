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
} from "@heroui/react";
import React from "react";

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
              <Button slot="close" variant="secondary" className={"text-[#27374D]"}>
                Cancel
              </Button>
              <Button slot="close" className={"bg-[#27374D] text-white hover:bg-[#27374D]/95"}>Confirm Booking</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookingModal;
