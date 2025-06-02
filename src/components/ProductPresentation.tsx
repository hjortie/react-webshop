import type { IProduct } from "../models/Product";

type ProductPresentationProps = {
  product: IProduct;
  addToCart: (product: IProduct) => void;
};
export const ProductPresentation = (props: ProductPresentationProps) => {
  return (
    <>
      <div className="image-container">
        <img src={props.product.imageUrl} alt={props.product.name} />
      </div>
      <h2>{props.product.name}</h2>
      <div className="purchase-container">
        <span>
          <b>Pris: </b>
          {props.product.price} SEK
        </span>
        <button
          onClick={() => {
            props.addToCart(props.product);
          }}
        >
          Köp
        </button>
      </div>
    </>
  );
};
