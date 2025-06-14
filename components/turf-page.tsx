"use client";

import { useState } from "react";
import { Upload, MapPin } from "lucide-react";
import CommonHeader from "./common/CommonHeader";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const TurfPage = () => {
  const [formData, setFormData] = useState({
    name: "Liverpool Ground",
    location: "Melwatha",
    description: "",
    width: "10m",
    length: "10m",
    amenities: "",
    sports: "",
    groundType: "",
    image: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="flex flex-col">
      <CommonHeader
        title="Manage Turf"
        subtitle="Define when your facility is open for bookings and set your base pricing structure."
      />

      {/* Turf Info Section */}
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Turf Info</h2>
        <p className="text-sm text-gray-600 mb-6">
          Update the basic details about your sports facility, including its
          name, location, and the types of sports supported.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <Label htmlFor="name">Name</Label>
            <div className="relative">
              <Input
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="pl-10"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <Label htmlFor="location">Location</Label>
            <div className="relative">
              <Input
                id="location"
                value={formData.location}
                onChange={handleChange}
                className="pl-10"
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter a description..."
              rows={4}
            />
          </div>

          {/* Image Upload */}
          <div>
            <Label>Ground Images</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg h-32 flex items-center justify-center text-center cursor-pointer">
              <div>
                <Upload className="mx-auto text-gray-400" />
                <p className="text-green-600 font-medium">Click to upload</p>
                <p className="text-sm text-gray-500">or drag and drop</p>
                <p className="text-xs text-gray-400">
                  JPEG, PNG, JPG (max. 800×400px)
                </p>
              </div>
            </div>
          </div>

          {/* Width */}
          <div>
            <Label htmlFor="width">Ground Width</Label>
            <div className="relative">
              <Input
                id="width"
                value={formData.width}
                onChange={handleChange}
                className="pl-10"
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* Length */}
          <div>
            <Label htmlFor="length">Ground Length</Label>
            <div className="relative">
              <Input
                id="length"
                value={formData.length}
                onChange={handleChange}
                className="pl-10"
              />
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* Amenities */}
          <div>
            <Label>Amenities</Label>
            <Select
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, amenities: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Amenities" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="wifi">WiFi</SelectItem>
                <SelectItem value="parking">Parking</SelectItem>
                <SelectItem value="restroom">Restroom</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sports */}
          <div>
            <Label>Sports</Label>
            <Select
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, sports: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select the sports" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="football">Football</SelectItem>
                <SelectItem value="cricket">Cricket</SelectItem>
                <SelectItem value="rugby">Rugby</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Ground Type */}
          <div>
            <Label>Ground Type</Label>
            <Select
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, groundType: value }))
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select the type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="grass">Grass</SelectItem>
                <SelectItem value="turf">Turf</SelectItem>
                <SelectItem value="synthetic">Synthetic</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-2 mt-6">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-green-500 text-white">Save changes</Button>
        </div>

        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
          <div className="mb-6">
            <h2 className="text-gray-900 font-semibold">
              Ownership/Business Documents
            </h2>
            <p className="text-sm text-gray-500">
              Update your business registration details and ownership
              documentation for legal compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* NIC Front */}
            <div>
              <label className="block text-gray-700 mb-1">NIC Front</label>
              <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md h-32 cursor-pointer hover:border-green-500 transition">
                <div className="text-center">
                  <Upload className="mx-auto text-gray-400" />
                  <p className="text-green-600 font-medium">Click to upload</p>
                  <p className="text-xs text-gray-500">
                    JPEG, PNG, JPG (max. 800×400px)
                  </p>
                </div>
              </div>
            </div>

            {/* NIC Back */}
            <div>
              <label className="block text-gray-700 mb-1">NIC Back</label>
              <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md h-32 cursor-pointer hover:border-green-500 transition">
                <div className="text-center">
                  <Upload className="mx-auto text-gray-400" />
                  <p className="text-green-600 font-medium">Click to upload</p>
                  <p className="text-xs text-gray-500">
                    JPEG, PNG, JPG (max. 800×400px)
                  </p>
                </div>
              </div>
            </div>

            {/* Business Registration Document */}
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-1">
                Business Registration Document
              </label>
              <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md h-32 cursor-pointer hover:border-green-500 transition">
                <div className="text-center">
                  <Upload className="mx-auto text-gray-400" />
                  <p className="text-green-600 font-medium">Click to upload</p>
                  <p className="text-xs text-gray-500">
                    JPEG, PNG, JPG (max. 800×400px)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-6">
            <button className="px-4 py-2 rounded-md text-gray-700 border border-gray-300 hover:bg-gray-100">
              Cancel
            </button>
            <button className="px-4 py-2 rounded-md text-white bg-green-600 hover:bg-green-700">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
