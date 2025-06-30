"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { User, MapPin, Upload } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface FormData {
  name: string;
  location: string;
  amenities: string;
  description: string;
  sports: string;
  groundType: string;
  groundWidth: string;
  groundLength: string;
  groundImages: File | null;
}

const amenitiesOptions = [
  "WiFi",
  "Parking",
  "Restrooms",
  "Lighting",
  "Locker Rooms",
  "Water Fountain",
];

const sportsOptions = [
  "Football",
  "Cricket",
  "Basketball",
  "Tennis",
  "Baseball",
  "Volleyball",
];

const groundTypeOptions = ["Grass", "Clay", "Artificial", "Turf", "Hardcourt"];

const List: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    location: "",
    amenities: "",
    description: "",
    sports: "",
    groundType: "",
    groundWidth: "",
    groundLength: "",
    groundImages: null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, groundImages: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.location.trim() !== "" &&
      formData.amenities.trim() !== "" &&
      formData.description.trim() !== "" &&
      formData.sports.trim() !== "" &&
      formData.groundType.trim() !== "" &&
      formData.groundWidth.trim() !== "" &&
      formData.groundLength.trim() !== "" &&
      formData.groundImages !== null
    );
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto p-4 space-y-6"
        noValidate
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm text-gray-700 mb-1">
              Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <User size={18} />
              </span>
              <input
                id="name"
                type="text"
                placeholder="Liverpool Ground"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm text-gray-700 mb-1"
            >
              Location
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <MapPin size={18} />
              </span>
              <input
                id="location"
                type="text"
                placeholder="Melwatha"
                value={formData.location}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
              />
            </div>
          </div>

          {/* Amenities Dropdown */}
          <div>
            <label
              htmlFor="amenities"
              className="block text-sm text-gray-700 mb-1"
            >
              Amenities
            </label>
            <Select
              value={formData.amenities}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, amenities: value }))
              }
            >
              <SelectTrigger className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600">
                <SelectValue placeholder="Select Amenities" />
              </SelectTrigger>
              <SelectContent>
                {amenitiesOptions.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Description and Image Upload */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="sm:col-span-2 flex flex-col">
            <label
              htmlFor="description"
              className="block text-sm text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              placeholder="Enter a description..."
              value={formData.description}
              onChange={handleChange}
              className="flex-1 w-full border border-gray-300 rounded-md p-3 text-gray-700 placeholder-gray-400 resize-none focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
            />
          </div>
          <div className="flex flex-col">
            <label className="block text-sm text-gray-700 mb-1">
              Ground Images
            </label>
            <label
              htmlFor="upload"
              className="flex-1 cursor-pointer flex flex-col items-center justify-center border border-gray-300 rounded-md text-center p-4 text-gray-500 hover:border-green-600 hover:text-green-600 transition-colors"
            >
              <span className="mb-1 p-2 rounded-full bg-white shadow-md">
                <Upload size={18} />
              </span>
              <span className="text-green-600 font-semibold text-sm">
                Click to upload
              </span>
              <span className="text-gray-500 text-xs">or drag and drop</span>
              <span className="text-gray-500 text-xs mt-1">
                JPEG, PNG, JPG (max. 800×400px)
              </span>
              <input
                id="upload"
                type="file"
                accept="image/jpeg,image/png,image/jpg"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Sports, Ground Type, Width, Length */}
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 items-end">
          {/* Sports */}
          <div className="sm:col-span-2">
            <label
              htmlFor="sports"
              className="block text-sm text-gray-700 mb-1"
            >
              Sports
            </label>
            <Select
              value={formData.sports}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, sports: value }))
              }
            >
              <SelectTrigger className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600">
                <SelectValue placeholder="Select the sport" />
              </SelectTrigger>
              <SelectContent>
                {sportsOptions.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Ground Type */}
          <div className="sm:col-span-2">
            <label
              htmlFor="groundType"
              className="block text-sm text-gray-700 mb-1"
            >
              Ground Type
            </label>
            <Select
              value={formData.groundType}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, groundType: value }))
              }
            >
              <SelectTrigger className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600">
                <SelectValue placeholder="Select the type" />
              </SelectTrigger>
              <SelectContent>
                {groundTypeOptions.map((item) => (
                  <SelectItem key={item} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Ground Width */}
          <div className="relative">
            <label
              htmlFor="groundWidth"
              className="block text-sm text-gray-700 mb-1"
            >
              Ground Width
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <MapPin size={18} />
              </span>
              <input
                id="groundWidth"
                type="text"
                placeholder="10m"
                value={formData.groundWidth}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
              />
            </div>
          </div>

          {/* Ground Length */}
          <div className="relative">
            <label
              htmlFor="groundLength"
              className="block text-sm text-gray-700 mb-1"
            >
              Ground Length
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <MapPin size={18} />
              </span>
              <input
                id="groundLength"
                type="text"
                placeholder="10m"
                value={formData.groundLength}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
              />
            </div>
          </div>
        </div>
      </form>

      {/* Button Section */}
      <div className="max-w-6xl mx-auto p-4 space-y-6 mt-5">
        <div className="flex flex-row sm:grid sm:grid-cols-3 gap-4">
          {/* Back Button */}
          <div className="flex-1">
            <button
              type="button"
              className="w-full border rounded-md py-2 text-btncolor border-btncolor"
            >
              Back
            </button>
          </div>

          {/* Placeholder for Center (Hidden on Mobile) */}
          <div className="hidden sm:block">
            <div className="relative">{/* Add something here if needed */}</div>
          </div>

          {/* Next Button */}
          <div className="flex-1">
            {isFormValid() ? (
              <Link href="/owner-documentation">
                <button
                  type="button"
                  className="w-full border border-gray-300 rounded-md py-2 text-white bg-btncolor"
                >
                  Next
                </button>
              </Link>
            ) : (
              <button
                type="button"
                disabled
                className="w-full border border-gray-300 rounded-md py-2 text-white bg-btncolor opacity-50 cursor-not-allowed"
                title="Please fill all required fields"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
