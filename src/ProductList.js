import React from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual} from "react-redux";
import "./ProductList.css";

/** Display full product list */

function ProductList() {
    const products = useSelector((store) => store.products, shallowEqual);
    const productCards = Object.keys(products).map(id => (
      <div className="col-md-3 mb-3" key={id}>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">
              <Link to={`/products/${id}`}>
                <img src={products[id].image_url} className="img-thumbnail"/>
                {products[id].name}</Link>
            </h2>

          </div>
        </div>
      </div>
    ));
  
    return (
      <div>
            <h4>Today's Deals of the Day!</h4>
            <div className="row">{productCards}</div>
    </div>
  );
}

export default ProductList;