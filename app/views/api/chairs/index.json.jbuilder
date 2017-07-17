@chairs.each do |chair|
  json.set! chair.id do
    json.partial! 'chair', chair: chair
  end
end
