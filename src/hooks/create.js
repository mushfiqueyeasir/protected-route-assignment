import { toast } from "react-toastify";
// import { getToken } from "../utility/token";

export const create = ({ endPoint, data, refetch, loading }) => {
  if (loading) {
    loading(true);
  }

  const headers = {
    "Content-Type": "application/json",
    // Authorization: "Bearer " + getToken(),
  };

  fetch(`${process.env.REACT_APP_serverLocation}/${endPoint}`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      } else {
      }
      return response.json();
    })
    .then((response) => {
      toast.success("User Info Updated!");
    })
    .catch((error) => {
      toast.error(error.message);
    })
    .finally(() => {
      if (refetch) {
        refetch();
      }
      if (loading) {
        loading(false);
      }
    });
};
