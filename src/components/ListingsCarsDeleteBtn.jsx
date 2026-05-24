"use client";
import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import toast from 'react-hot-toast';

const ListingsCarsDeleteBtn = ({ListingsCar}) => {
        
    const handleDelete =  async ()=>{
      const {data:tokenData} = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/my_car_listing/${ListingsCar._id}`,{

              method: "DELETE",
              headers:{ "content-type": "application/json",
                authorization: `bearer ${tokenData?.token} `

              }
        })

        const data = await res.json()
         

         window.location.reload()
         toast.success('Successfully Deleted!')
    }
    return (
        <AlertDialog>
              <Button variant="danger "
                    className="bg-[#DDE6ED] text-[#27374D] hover:bg-[#27374D] hover:text-[#DDE6ED] text-xs font-bold w-full 
                             px-4 py-1.5 rounded-full  uppercase tracking-wider cursor-pointer transition-colors  duration-300  "
                  >
                    Delete
                  </Button>
      
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px] bg-[#DDE6ED]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading className='text-[#252525] font-bold'>Delete listing permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                <strong>{ListingsCar.name}</strong> will be removed permanently from your listings, including all related booking data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={handleDelete}>
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    );
};

export default ListingsCarsDeleteBtn;