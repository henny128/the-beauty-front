import Marquee from "react-fast-marquee";
import FadeUp from "../ui/FadeUp";
import { AiFillStar } from "react-icons/ai";


const mockReviews = [
  {
    name: 'Jane Smith',
    content: 'Great quality and fast delivery. Will buy again.',
    rating: 4,
    imageUrl: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg',
  },
  {
    name: 'Alice Johnson',
    content: 'Excellent customer service and the item exceeded my expectations.',
    rating: 4,
    imageUrl: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg',
  },
  {
    name: 'Bob Brown',
    rating: 4,
    content: 'Good value for money. Satisfied with the purchase.',
    imageUrl: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
  },
];


const Reviews = () => {
  return (
    <div dir="ltr" className="p-4 text-[var(--wst-button-color-text-primary)]">
      <FadeUp>
        <h1 className="text-2xl font-medium mb-4 text-right ">המלצות</h1>
      </FadeUp>
      <div
        className="md:hidden flex gap-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] py-4"
        dir="rtl"
        about="mobile view"
      >
        {mockReviews.map((review, index) => (
          <div key={index} className="flex flex-col items-start p-4 mx-2 w-[300px] shrink-0 h-full">
            <div className="grid grid-cols-[auto_1fr] grid-row-2 space-x-2">
              <img
                src={review.imageUrl}
                alt={review.name}
                className="w-12 h-12 object-cover rounded-full row-span-2"
              />
              <h2 className="text-lg font-semibold">{review.name}</h2>
              <p className="flex justify-start">
                {
                  Array.from({ length: 5 }, (_, i) => (
                    <AiFillStar
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                    />
                  ))
                }

              </p>
            </div>
            <p className=" p-2 line-clamp-2">{review.content}</p>
          </div>
        ))}
      </div>
      <div className="space-y-4 hidden md:block">
        <Marquee autoFill direction="left" pauseOnHover>
          {mockReviews.map((review, index) => (
            <div key={index} className="flex flex-col items-start p-4 mx-2 w-[300px] h-full" dir="rtl">
              <div className="grid grid-cols-[auto_1fr] grid-row-2 space-x-2">
                <img
                  src={review.imageUrl}
                  alt={review.name}
                  className="w-12 h-12 object-cover rounded-full row-span-2"
                />
                <h2 className="text-lg font-semibold">{review.name}</h2>
                <p className="flex justify-start">
                  {
                    Array.from({ length: 5 }, (_, i) => (
                      <AiFillStar
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                      />
                    ))
                  }

                </p>
              </div>
              <p className=" p-2 line-clamp-2">{review.content}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Reviews;