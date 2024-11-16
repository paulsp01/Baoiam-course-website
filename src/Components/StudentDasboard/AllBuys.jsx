import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../Redux/slices/orderSlice';
import BeatLoader from 'react-spinners/BeatLoader'; // Import the spinner

const AllBuys = () => {
  const dispatch = useDispatch();
  const { orders, status, error } = useSelector((state) => state.orders);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (status == 'idle') {
      dispatch(fetchOrders(token));
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-[200px]">
        <BeatLoader color="#4F46E5" loading={true} size={15} />
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="text-center p-4 bg-red-100 text-red-600 rounded-lg ">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg ">
      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Your Orders</h2>
      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 dark:text-gray-200  rounded-lg p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg">Order ID: {order.order_id}</h3>
                <span
                  className={`text-sm font-medium px-3 py-1 rounded-full ${
                    order.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-600'
                      : order.status === 'failed'
                      ? 'bg-red-100 text-red-600'
                      : 'bg-green-100 text-green-600'
                  }`}
                >
                  {order.status}
                </span>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                Total Amount: 
                <span className="font-bold text-indigo-600 dark:text-indigo-400">
                  ₹ {order.total_amount}
                </span>
              </p>

              <p className="text-gray-500 dark:text-gray-300 text-sm">
                Order Date: {new Date(order.order_date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBuys;
