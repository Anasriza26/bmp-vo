import { Car, Droplets, Eye, Users } from "lucide-react";

export const sports = [
  { name: "Soccer", icon: "⚽" },
  { name: "Cricket", icon: "🏏" },
  { name: "Badminton", icon: "🏸" },
  { name: "Volleyball", icon: "🏐" },
  { name: "Netball", icon: "🏀" },
  { name: "Tennis", icon: "🎾" },
];

export const venues = [
  {
    id: 1,
    name: "Futsal Prime - FD",
    location: "Puttalam, Sri Lanka",
    rating: 4.5,
    price: 2500,
    image:
      "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800",
    sport: "Soccer",
    capacity: "10-12 players",
    features: [
      { icon: Users, label: "Floodlights" },
      {icon: Users, label:"Parking"},
      {icon: Users, label:"Changing Rooms"},
    ],
  },
  {
    id: 2,
    name: "Futsal Prime - FD",
    location: "Puttalam, Sri Lanka",
    rating: 4.8,
    price: 3500,
    image:
      "https://media.istockphoto.com/id/1167866941/photo/cricket-pitch-sport-grass-field-empty-background.jpg?s=2048x2048&w=is&k=20&c=8PuzCBOxfDl_8XoSR4djr8I0xv_errsBElwTeN9qXfQ=",
    sport: "Cricket",
    capacity: "22 players",
    features: [
      { icon: Users, label: "Professional Pitch" },
      {icon: Users, label:"Scoreboard"},
      {icon: Users, label:"Pavilion"},
    ],
  },
  {
    id: 3,
    name: "Futsal Prime - FD",
    location: "Puttalam, Sri Lanka",
    rating: 4.6,
    price: 1500,
    image:
      "https://images.unsplash.com/photo-1723633236252-eb7badabb34c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kb29yJTIwQmFkbWludG9uJTIwJTIwZ3JvdW5kfGVufDB8fDB8fHww",
    sport: "Badminton",
    capacity: "2-4 players",
    features: [
      { icon: Droplets, label: "Air Conditioned" },
      {icon: Droplets, label:"4 Courts"},
      {icon: Droplets, label:"Equipment Rental"},
    ],
  },
  {
    id: 4,
    name: "Futsal Prime - FD",
    location: "Puttalam, Sri Lanka",
    rating: 4.3,
    price: 2000,
    image:
      "https://images.unsplash.com/photo-1559369064-c4d65141e408?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZG9vciUyMFZvbGxleWJhbGwlMjBncm91bmR8ZW58MHx8MHx8fDA%3D",
    sport: "Volleyball",
    capacity: "12 players",
    features: [
      { icon: Car, label: "Beach Setting" },
      {icon: Car, label:"Night Games"},
      {icon: Car, label:"Refreshments"},
    ],
  },
  {
    id: 5,
    name: "Futsal Prime - FD",
    location: "Puttalam, Sri Lanka",
    rating: 4.4,
    price: 1800,
    image:
      "https://plus.unsplash.com/premium_photo-1745951329361-34bd6ea25778?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kb29yJTIwTmV0YmFsbCUyMCUyMGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
    sport: "Netball",
    capacity: "14 players",
    features: [
      { icon: Eye, label: "Outdoor Court" },
      {icon: Eye, label:"Seating Area"},
      {icon: Eye, label:"Coaching Available"},
    ],
  },
  {
    id: 6,
    name: " huvuv",
    location: "Kandy, Sri Lanka",
    rating: 4.7,
    price: 2800,
    image:
      "https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=800",
    sport: "Tennis",
    capacity: "2-4 players",
      features: [
      { icon: Eye, label: "3 Courts" },
      {icon: Eye, label:"Pro Shop"},
      {icon: Eye, label:"Lessons Available"},
    ],
  },
];
