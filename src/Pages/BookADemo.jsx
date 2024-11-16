import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseDetails } from '../Redux/slices/courseDetailSlice';
import { FaRupeeSign, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import { FiBookOpen } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BeatLoader, ClipLoader } from 'react-spinners';

const apiUrl = import.meta.env.VITE_API_URL;
const razorpayKeyId = import.meta.env.RAZORPAY_KEY_ID;

const BookADemo = () => {
  const dispatch = useDispatch();
  const { courses, status, error } = useSelector((state) => state.courseDetails);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { courseId } = useParams();

  // change previously it was course so to make changes throughout ( global course variable )
  const course = courses[courseId]
  // change previously it was course so to make changes throughout 
  useEffect(() => {
    
    dispatch(fetchCourseDetails(courseId));
  }, [dispatch, courseId]);

  const handlePayment = () => {
    setLoading(true);
    const buyCourse = async () => {
      try {
        const { data } = await axios.post(
          `${apiUrl}/api/orders/demo-session/`,
          { plan_id: course.plans[selectedPlan].id },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `JWT ${localStorage.getItem("access_token")}`,
            },
          }
        );

        const { order_id, total_amount } = data;
        const options = {
          key: razorpayKeyId,
          amount: total_amount,
          currency: "INR",
          order_id: order_id,
          handler: async function (res) {
            const payment_id = res.razorpay_payment_id;
            const signature = res.razorpay_signature;
            try {
              const response = await axios.post(
                `${apiUrl}/api/orders/verify_payment/`,
                JSON.stringify({ payment_id, order_id, signature }),
                {
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `JWT ${localStorage.getItem("access_token")}`,
                  },
                }
              );
              if (response.status === 200) {
                toast.success("Enrollment completed successfully!");
                setLoading(false);
                setTimeout(() => {
                  navigate("/profile");
                }, 2000);
              }
            } catch (err) {
              toast.error("Payment verification failed!");
              setLoading(false);
            }
          },
          modal: {
            ondismiss: () => {
              toast.error("Payment cancelled!");
              setLoading(false);
            },
          },
          theme: { color: "#3399cc" },
        };
        if (window.Razorpay) {
          const rzp = new window.Razorpay(options);
          rzp.open();
        } else {
          toast.error("Payment gateway not available");
          setLoading(false);
        }
      } catch (err) {
        toast.error("Something went wrong during the payment process");
        setLoading(false);
      }
    };
    buyCourse();
  };

  if (status === 'loading') {
    return <div className="flex justify-center items-center h-[90vh]">
      <BeatLoader color="#4F46E5" loading={true} size={15} />
    </div>;
  }
  if (status === 'failed') {
    return <div className="flex justify-center text-red-500 items-center h-[90vh]">
      {error}
    </div>;;
  }

  console.log(course);



  return (
    <section className="min-h-screen bg-gray-100 dark:bg-[#080529] py-12 px-4 relative">
      {
        course?.plans.length === 0 ? <>

          <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center p-6 rounded-lg text-center dark:border-gray-700">
            <FaExclamationTriangle className="text-6xl text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">No Plans Available</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              It seems there are no plans available for this course at the moment.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Please check back later or contact support for more information.
            </p>
          </div>

        </> :

          <>
            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-8">
              Demo Course on <span className="bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent">{course?.title}</span>
            </h2>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-left flex flex-col border border-gray-300 dark:border-gray-700">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Choose Your Plan</h2>
                <div className="space-y-4">
                  {course?.plans.map((plan, index) => (
                    <div
                      key={plan.id}
                      onClick={() => setSelectedPlan(index)}
                      className={`flex items-center p-4 rounded-lg border ${selectedPlan === index ? 'border-indigo-400 bg-gradient-to-r from-teal-50  to-indigo-100 shadow-lg' : 'border-gray-300 dark:border-gray-600'}`}
                    >
                      <input
                        type="radio"
                        name="plan"
                        value={index}
                        checked={selectedPlan === index}
                        onChange={() => setSelectedPlan(index)}
                        className="form-radio h-5 w-5 text-orange-500 dark:text-orange-400"
                      />
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 capitalize">{course.plans[index].name}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mt-1">{course.plans[index].name} Course</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {selectedPlan !== null && (
                <div className="flex flex-col space-y-8">
                  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-300 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                      <FiBookOpen className="mr-2 text-indigo-600 dark:text-indigo-400 capitalize" /> {course?.title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      <span className="font-semibold">Description:</span> {course?.description.slice(0,100)+ "..."}
                      {/* <span className="font-semibold">Description:</span> {course?.description} */}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 capitalize">
                      <span className="font-semibold">Course Type:</span> {course?.plans[selectedPlan].name}
                    </p>
                    <p className="flex items-center text-lg font-bold text-gray-900 dark:text-gray-100">
                      <FaRupeeSign className="mr-1 text-orange-600 dark:text-orange-400" /> ₹{course?.plans[selectedPlan].price}
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-300 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                      <FaCheckCircle className="mr-2 text-green-500" /> Final Summary
                    </h2>

                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      You have selected the <span className="font-semibold">{course?.plans[selectedPlan].name}</span> for ₹100.
                    </p>

                    <button
                      onClick={handlePayment}
                      className="py-3 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg shadow-md hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50 transition-transform transform hover:scale-105 w-full"
                    >
                      {loading ? (
                        <div className="flex justify-center items-center">
                          <ClipLoader size={24} color="#fff" />
                          <span className="ml-2">Processing...</span>
                        </div>
                      ) : (
                        "Book a Demo for ₹100"
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <ToastContainer />

          </>
      }
    </section>
  );
};

export default BookADemo;
