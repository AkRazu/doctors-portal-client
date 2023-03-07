import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ConfirmationModal from "../Home/Shared/ConfirmationModal/ConfirmationModal";
import toast from "react-hot-toast";
const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (err) {}
    },
  });
  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }
  const closeModal = () => {
    setDeletingDoctor(null);
  };
  const handelDeleteDoctor = (doctor) => {
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.deletedCount >0){
          refetch();
          toast.success(`Doctor ${doctor.name} deleted successfully`)
        }
        
      });
  };
  return (
    <div>
      <h2 className="font-bold text-2xl mb-5">
        Manage Doctors: {doctors?.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {doctors?.map((doctor, i) => (
              <tr key={doctor._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={doctor?.image} />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="confirmation-modal"
                    className="btn btn-sm btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <ConfirmationModal
          title={`Are you  sure you want to delete?`}
          message={`If you delete ${deletingDoctor.name}.It can't be undo`}
          successAction={handelDeleteDoctor}
          modalData={deletingDoctor}
          successButtonName="Delete"
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default ManageDoctors;
