export const fetchChairs = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/chairs',
    error: (err) => console.log(err)
  });
};

export const fetchChair = id => (
  $.ajax({
    method: 'GET',
    url: `api/chairs/${id}`
  })
);

export const createChair = data => (
  $.ajax({
    method: 'POST',
    url: 'api/chairs',
    data
  })
);
