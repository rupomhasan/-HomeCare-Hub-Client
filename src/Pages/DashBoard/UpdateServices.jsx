import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const UpdateServices = () => {
  const { id } = useParams();

  const navigate = useNavigate();

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
  const [productId, setProductId] = useState("");

  const { data } = useQuery({
    queryKey: ["Update"],
    queryFn: async () => {
      return await axios.get(`/service/${id}`);
    },
  });


  const handleUpdateService = async (e) => {
    e.preventDefault();
    const service = {
      Service_Image: serviceImg || data?.data?.Service_Image,
      Service_Name: serviceName || data?.data?.Service_Name,
      Service_Description: description || data?.data?.Service_Description,
      Service_Price: price || data?.data?.Service_Price,
      Category: category || data?.data?.Category,
      Rating: rating || data?.data?.Rating,
      Total_Purchase: 95 || data?.data?.Total_Purchase,
      Service_Provider: {
        Email: user?.email || email,
        Logo: logo || data?.data?.Service_Provider?.Logo,
        Image: providerImg || data?.data?.Service_Provider?.Image,
        Name: name || data?.data?.Service_Provider?.Name,
      },
      Service_Area: {
        name: area || data?.data?.Service_Area?.name,
        latitude: latitude || data?.data?.Service_Area?.latitude,
        longitude: longitude || data?.data?.Service_Area?.longitude,
      },
    };
    axios.patch(`/update-service/${id}`, service).then((res) => {

      if (res?.data?.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Service Successfully Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/myServices");
      }
    });
  };
  return (
    <div>
      <div className="my-10 py-10 bg-[url('https://thepixelcurve.com/html/techwix/techwix/assets/images/bg/choose-us-bg3.jpg')] bg-cover  bg-sky-200 bg-blend-multiply">
        <div className="max-w-screen-md mx-auto  text-left p-10 ">
          <form onSubmit={handleUpdateService} className="space-y-5">
            <h3 className="text-4xl font-Teko text-center font-medium">
              Update Service
            </h3>
            <div className="grid md:grid-cols-2 justify-between items-center gap-10 ">
              <div className=" space-y-5 ">
                <div className="space-y-2">
                  <span className="text-xl font-medium">Service Id</span>
                  <input
                    type="text"
                    onBlur={(e) => setProductId(e.target.value)}
                    defaultValue={data?.data?._id}
                    placeholder="Service Name"
                    readOnly
                    className="py-1 px-5 block w-full"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xl font-medium">Service Name</span>
                  <input
                    type="text"
                    onBlur={(e) => setServiceName(e.target.value)}
                    defaultValue={data?.data?.Service_Name}
                    placeholder="Service Name"
                    className="py-1 px-5 block w-full"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xl font-medium">Service Price</span>
                  <input
                    type="number"
                    onBlur={(e) => setPrice(e.target.value)}
                    defaultValue={data?.data?.Service_Price}
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
                    defaultValue={data?.data?.Category}
                    placeholder="Service Category"
                    className="py-1 px-5 block w-full"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xl font-medium">Service Rating</span>
                  <input
                    type="number"
                    onBlur={(e) => setRating(e.target.value)}
                    defaultValue={data?.data?.Rating}
                    placeholder="Rating"
                    className="py-1 px-5 block w-full"
                    min="0"
                    max="5"
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
                      defaultValue={data?.data?.Service_Description}
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
                    defaultValue={data?.data?.Service_Provider?.Name}
                    placeholder="Provider Name"
                    className="py-1 px-5 block w-full"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xl font-medium">Email</span>
                  <input
                    type="email"
                    onBlur={(e) => setEmail(e.target.value)}
                    defaultValue={data?.data?.Service_Provider?.Email}
                    // defaultValue={user.email}
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
                    defaultValue={data?.data?.Total_Purchase}
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
                    defaultValue={data?.data?.Service_Area?.name}
                    placeholder="Area Name"
                    className="py-1 px-5 block w-full"
                  />
                </div>
                <div className="space-y-2">
                  <span className="text-xl font-medium">Latitude</span>
                  <input
                    type="number"
                    onBlur={(e) => setLatitude(e.target.value)}
                    defaultValue={data?.data?.Service_Area?.latitude}
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
                    defaultValue={data?.data?.Service_Area?.longitude}
                    placeholder="Longitude"
                    className="py-1 px-5 block w-full"
                    step="any"
                  />
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

export default UpdateServices;
