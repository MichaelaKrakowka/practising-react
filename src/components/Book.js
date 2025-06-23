import "./Book.css";
import { OrderButton } from "./OrderButton";

export const Book = ({ title, image }) => {
  return (
    <div className="one-book">
      <h2 className="main-heading">{title}</h2>
      <img src={image} alt="book-image" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sint
        quisquam eum perferendis consequuntur consequatur velit doloremque
        voluptate rerum expedita!
      </p>
      <OrderButton />
    </div>
  );
};
