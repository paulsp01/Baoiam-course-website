import React, { useState } from 'react';
import VisaCard from '../../assets/cards/Visa-Logo.png'
import MasterCard from '../../assets/cards/mastercard.png'
import RupayCard from '../../assets/cards/rupay.png'

const ManagePayments = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const paymentMethods = [
    { id: 'card', name: 'Card' },
    { id: 'upi', name: 'UPI' },
    { id: 'netbanking', name: 'Net Banking' },
  ];

  const handleInputChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Payment method</h2>
      
      <div className="relative mb-6">
        <div className="flex">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              className={`flex-1 text-center py-2 ${
                paymentMethod === method.id
                  ? 'text-blue-600 z-10 border-b-2 border-blue-600'
                  : 'text-gray-500'
              }`}
              onClick={() => setPaymentMethod(method.id)}
            >
              {method.name}
            </button>
          ))}
        </div>
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-gray-200 transition-all duration-300"
          style={{
            width: '100%',
          }}
        />
      </div>

      {paymentMethod === 'card' && (
        <form className="space-y-4">
          <div className="flex space-x-4 mb-4">
            {[{
              cardName:'mastercard',
              logo:MasterCard,
            },
            {
              cardName:'visa',
              logo:VisaCard,
            },
            {
              cardName:'rupay',
              logo:RupayCard,
            }].map((card) => (
              <button
                key={card}
                type="button"
                className="p-2 border w-1/3 h-auto  object-cover bg-center rounded-md border-gray-300 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <img src={card.logo} alt={card.cardName} className="object-cover" />
              </button>
            ))}
          </div>

          <div>
            <label htmlFor="cardholderName" className="block text-sm font-medium text-gray-700">
              Cardholder name
            </label>
            <input
              type="text"
              id="cardholderName"
              name="cardholderName"
              value={cardDetails.cardholderName}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-grow">
              <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">
                Card number
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div className="w-24">
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={cardDetails.expiryDate}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div className="w-20">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="saveDetails"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="saveDetails" className="ml-2 block text-sm text-gray-900">
              Save my payment details for future purchases
            </label>
          </div>

          <p className="text-sm text-gray-500">
            Credit Card payments may take up to 24h to be processed
          </p>
        </form>
      )}

      {paymentMethod === 'upi' && (
        <div className="space-y-4">
          <p className="text-sm text-gray-700">Enter your UPI ID to make the payment</p>
          <div className='border border-gray-300 flex rounded-md shadow-sm p-2 items-center px-4'>
          <input
            type="text"
            placeholder="yourname@upi"
            className="w-full outline-none"
          />
          <p className="text-nowrap text-green-500 hover:text-green-700 cursor-pointer">verify</p>
          </div>
        </div>
      )}

      {paymentMethod === 'netbanking' && (
        <div className="space-y-4">
          <p className="text-sm text-gray-700">Select your bank to proceed with Net Banking</p>
          <select className="block w-full border border-gray-300 rounded-md shadow-sm p-2">
            <option>Select Bank</option>
            <option>State Bank of India</option>
            <option>HDFC Bank</option>
            <option>ICICI Bank</option>
            {/* Add more banks as needed */}
          </select>
        </div>
      )}
    </div>
  );
};

export default ManagePayments;