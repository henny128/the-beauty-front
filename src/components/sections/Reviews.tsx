import Marquee from "react-fast-marquee";

const mockReviews = [
  {
    name: 'John Doe',
    content: 'This product is amazing! Highly recommend it to everyone.',
    imageUrl: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg',
  },
  {
    name: 'Jane Smith',
    content: 'Great quality and fast delivery. Will buy again.',
    imageUrl: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg',
  },
  {
    name: 'Alice Johnson',
    content: 'Excellent customer service and the item exceeded my expectations.',
    imageUrl: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg',
  },
  {
    name: 'Bob Brown',
    content: 'Good value for money. Satisfied with the purchase.',
    imageUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
  },
];

const Reviews = () => {
  // TODO: RIGHT MOBIL SECTOIN AND FIX CSS
  return (
    <div dir="ltr" className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-right">Customer Reviews</h1>
      <Marquee direction="left" className="space-y-4">
        {mockReviews.map((review, index) => (
          <div key={index} className="flex items-start space-x-4 pb-4">
            <img
              src={review.imageUrl}
              alt={review.name}
              className="w-12 h-12 object-cover"
            />
            <div className="text-left">
              <h2 className="text-lg font-semibold">{review.name}</h2>
              <p className="text-gray-700">{review.content}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Reviews;