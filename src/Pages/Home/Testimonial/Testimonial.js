import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";
const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
      location: "California",
    },
    {
      _id: 2,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people2,
      location: "California",
    },
    {
      _id: 3,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people3,
      location: "California",
    },
  ];
  return (
    <section>
      <div className="flex items-center justify-between lg:pt-28 lg:pb-36 py-20">
        <div>
          <h4 className="text-secondary font-bold text-xl">Testimonial</h4>
          <h2 className="text-4xl">What Our Patients Says</h2>
        </div>
        <figure>
          <img className="lg:w-48 w-24" src={quote} alt="quote" />
        </figure>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
        {
            reviews.map(review=><Review key={review._id} review={review} />)
        }
      </div>
    </section>
  );
};

export default Testimonial;
