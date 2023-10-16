"use client";

const Modal = ({formData}:any) => {
    const {pickUpLocation,dropLocation,datePickUp,pickupUpTime,pickupMinute,dropOffDate,dropOffTime,dropoffMinute} = formData
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal w-full">
  <div className="modal-box max-w-[90%] py-[30px]">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
   <h1 className="text-bold text-3xl text-green-800 border-b-2 border-indigo-800 inline-block">Thank you Booking has been done!</h1>
    <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
      
        <th>Pick-Up Location</th>
        <th>Drop-Off Location</th>

        <th>Pick-Up Date</th>
        <th>Pick-Up Time</th>
        <th>Pick-Up Minute</th>

        <th>Drop-Off Date</th>
        <th>Drop-Off Time</th>
        <th>Drop-Off Minute</th>
      </tr>
    </thead>
    <tbody>
     
      <tr>
        
        <td>{pickUpLocation}</td>
        <td>{dropLocation}</td>

        <td>{datePickUp}</td>
        <td>{pickupUpTime}</td>
        <td>{pickupMinute}</td>

        <td>{dropOffDate}</td>
        <td>{dropOffTime}</td>
        <td>{dropoffMinute}</td>
      </tr>
     
    </tbody>
  </table>
</div>


  </div>
</dialog>
        </div>
    );
};

export default Modal;