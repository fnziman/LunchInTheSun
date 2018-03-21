@lunch_spots.each do |lunch_spot|
  json.set! lunch_spot.id do
    json.partial! 'lunch_spot', lunch_spot: lunch_spot
    # json.reviewIds []
  end
end
