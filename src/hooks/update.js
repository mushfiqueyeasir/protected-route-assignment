import { toast } from "react-toastify";
// import { getToken } from "../utility/token";

export const update = ({ endPoint, email, data, refetch, loading }) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      // Authorization: "Bearer " + getToken(),
    },
    body: JSON.stringify(data),
  };

  fetch(
    `${process.env.REACT_APP_serverLocation}/${endPoint}/${email}`,
    requestOptions
  )
    .then((response) => {
      if (response.ok) {
        if (refetch) {
          refetch();
        }
        toast.success(`Update Successful!`);
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .catch((error) => {
      toast.error(error.message);
    })
    .finally(() => {
      if (loading) {
        loading(false);
      }
    });
};
