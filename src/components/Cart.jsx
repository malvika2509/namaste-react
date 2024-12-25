import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-10">
        Your cart is empty.<p>Add items to your cart</p>
      </div>
    );
  }

  return (
    <div className="p-6 w-1/2 m-auto">
      <h2 className="text-xl font-semibold mb-6">Your Cart</h2>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="border-b border-gray-300 py-4 flex items-start justify-between"
        >
          <div className="flex">
            {item.imageId && (
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_150,c_fit/${item.imageId}`}
                alt={item.name}
                className="w-20 h-20 rounded-md"
              />
            )}
            <div className="ml-4">
              <h3 className="font-medium text-lg mb-1">{item.name}</h3>
              <p className="text-gray-800 font-semibold mb-1">
                ₹{(item.price || item.defaultPrice || 0) / 100}
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => handleRemove(item)}
              className="px-2 py-1 bg-red-500 text-white rounded-md"
            >
              -
            </button>
            <span className="px-4">{item.quantity}</span>
            <button
              onClick={() => handleAdd(item)}
              className="px-2 py-1 bg-green-500 text-white rounded-md"
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="text-right mt-4 font-semibold">
        Total: ₹
        {cartItems.reduce(
          (total, item) =>
            total + (item.price || item.defaultPrice || 0) * item.quantity,
          0
        ) / 100}
      </div>
      <div>
        <button
          onClick={handleClearCart}
          className="px-2 py-1 bg-red-600 text-white rounded-md"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
