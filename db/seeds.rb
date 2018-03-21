# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

lunch_spots = LunchSpot.create([
  { description: 'watch people skateboarding!!', lat: 40.748590, lng: -74.009142},
  { description: 'always sunny', lat: 40.749789, lng:-74.009195 },
  { description: 'free musical accompaniment', lat: 40.731982, lng: -73.998434},
  { description: 'gelato for dessert right next door', lat: 40.746763, lng: -74.004509},
  { description: 'tons of dogs to play with', lat: 40.748795, lng: -74.007539},
  { description: 'lunch by the water', lat: 40.750565, lng: -74.008487},
  ])
