import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

const AddService = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [serviceName, setServiceName] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [price, setPrice] = useState(null);
  const [area, setArea] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState(user?.email);
  const [serviceImg, setServiceImg] = useState("");
  const [providerImg, setProviderImg] = useState("");
  const [logo, setLogo] = useState("");

  // const handleServiceImage = () => {

  // }
  const handleNewService = async (e) => {
    e.preventDefault();

    const service = {
      Service_Image: serviceImg || "",
      Service_Name: serviceName || "",
      Service_Description: description || "",
      Service_Price: price || "",
      Category: category || "",
      Rating: rating || "",
      Total_Purchase: 95 || "",
      Service_Provider: {
        Email: user?.email || email || "",
        Logo: logo || "",
        Image: providerImg || "",
        Name: name || "",
      },
      Service_Area: {
        name: area || "",
        latitude: latitude || "",
        longitude: longitude || "",
      },
    };
    axios.post(`/create-service?email=${user.email}`, service).then((res) => {
      if (res?.data?.acknowledged) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Service Successfully Added",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <div className="my-20  bg-sky-200">
        <div className="max-w-screen-md mx-auto  text-left p-10 shadow-xl">
          <form onSubmit={handleNewService} className="space-y-5">
            <h3 className="text-4xl font-Teko text-center font-medium">
              Add New Service
            </h3>
            <div className="grid md:grid-cols-2 justify-between items-center gap-10 ">
              <div className=" space-y-5 ">
                <div className="space-y-2">
                  <span className="text-xl font-medium">Service Name</span>
                  <input
                    type="text"
                    onBlur={(e) => setServiceName(e.target.value)}
                    placeholder="Service Name"
                    className="py-1 px-5 block w-full"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xl font-medium">Service Price</span>
                  <input
                    type="number"
                    onBlur={(e) => setPrice(e.target.value)}
                    placeholder="Service Price"
                    className="py-1 px-5 block w-full"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xl font-medium">Service Category</span>
                  <input
                    type="text"
                    onBlur={(e) => setCategory(e.target.value)}
                    placeholder="Service Category"
                    className="py-1 px-5 block w-full"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xl font-medium">Service Rating</span>
                  <input
                    type="number"
                    onBlur={(e) => setRating(e.target.value)}
                    placeholder="Rating"
                    className="py-1 px-5 block w-full"
                    min="0"
                    step="any"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xl font-medium">Service Image</span>
                  <div>
                    <input
                      onBlur={(e) => setServiceImg(e.target.value)}
                      type="file"
                      accept="image"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-xl font-medium">Description</span>
                  <div>
                    <textarea
                      onBlur={(e) => setDescription(e.target.value)}
                      className="p-[7px] w-full"
                      rows={4}
                      placeholder="Write about your service . . ."
                    />
                  </div>
                </div>
              </div>
              <div className=" space-y-5">
                <div className="space-y-2">
                  <span className="text-xl font-medium">Provider Name</span>
                  <input
                    type="text"
                    onBlur={(e) => setName(e.target.value)}
                    placeholder="Provider Name"
                    className="py-1 px-5 block w-full"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xl font-medium">Email</span>
                  <input
                    type="email"
                    onBlur={(e) => setEmail(e.target.value)}
                    defaultValue={user.email}
                    placeholder="Email"
                    readOnly
                    className="py-1 px-5 block w-full"
                  />
                </div>{" "}
                <div className="space-y-2">
                  <span className="text-xl font-medium">
                    Total Purchase Services
                  </span>
                  <input
                    type="number"
                    onBlur={(e) => setEmail(e.target.value)}
                    placeholder="Purchased Services"
                    className="py-1 px-5 block w-full"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xl font-medium">Provider Location</span>
                  <input
                    type="text"
                    onBlur={(e) => setArea(e.target.value)}
                    placeholder="Area Name"
                    className="py-1 px-5 block w-full"
                  />
                </div>
                <div className="flex gap-5">
                  <div className="space-y-2">
                    <span className="text-xl font-medium">Latitude</span>
                    <input
                      type="number"
                      onBlur={(e) => setLatitude(e.target.value)}
                      placeholder="Latitude"
                      className="py-1 px-5 block w-full"
                      step="any"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xl font-medium">Longitude</span>
                    <input
                      type="number"
                      onBlur={(e) => setLongitude(e.target.value)}
                      placeholder="Longitude"
                      className="py-1 px-5 block w-full"
                      step="any"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-xl font-medium">Provider Image</span>
                  <div>
                    <input
                      onBlur={(e) => setProviderImg(e.target.value)}
                      type="file"
                      accept="image"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-xl font-medium">Provider Logo</span>
                  <div>
                    <input
                      onBlur={(e) => setLogo(e.target.value)}
                      type="file"
                      accept="image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <input
              type="submit"
              value="Add Now"
              className="btn w-full rounded text-2xl font-Teko bg-[#5bb543] border-none text-white hover:bg-[#238f05]"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
