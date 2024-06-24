// import { useContext } from "react";
// import myContext from "../../context/myContext";

// const OrderDetail = () => {
//     const context = useContext(myContext);
//     const { getAllOrder, deleteProduct } = context;
//     // console.log(getAllOrder)
//     return (
//         <div>
//             <div>
//                 <div className="py-5">
//                     {/* text  */}
//                     <h1 className=" text-xl text-orange-300 font-bold">All Order</h1>
//                 </div>

//                 {/* table  */}
//                 <div className="w-full overflow-x-auto">
//                     <table className="w-full text-left border border-collapse sm:border-separate border-orange-100 text-orange-400" >
//                         <tbody>
//                             <tr>
//                                 <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100 font-bold fontPara">
//                                     S.No.
//                                 </th>

//                                 <th scope="col"
//                                     className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">
//                                     Order Id
//                                 </th>

//                                 <th scope="col"
//                                     className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">
//                                     Image
//                                 </th>

//                                 <th scope="col"
//                                     className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">
//                                     Title
//                                 </th>

//                                 <th scope="col"
//                                     className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">
//                                     Category
//                                 </th>

//                                 <th scope="col"
//                                     className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">
//                                     Price
//                                 </th>

//                                 <th scope="col"
//                                     className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">
//                                     Quantity
//                                 </th>

//                                 <th scope="col"
//                                     className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">
//                                     Total Price
//                                 </th>

//                                 <th scope="col"
//                                     className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">
//                                     Status
//                                 </th>

//                                 <th scope="col"
//                                     className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">
//                                     Name
//                                 </th>

//                                 <th scope="col"
//                                     className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">
//                                     Address
//                                 </th>

//                                 <th scope="col"
//                                     className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">
//                                     Pincode
//                                 </th>

//                                 <th scope="col"
//                                     className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">
//                                     Phone Number
//                                 </th>

//                                 <th scope="col"
//                                     className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">
//                                     Email
//                                 </th>

//                                 <th scope="col"
//                                     className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">
//                                     Date
//                                 </th>

//                                 <th scope="col"
//                                     className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">
//                                     Action
//                                 </th>


//                             </tr>
//                             {getAllOrder.map((order) => {
//                                 console.log(order)
//                                 return (
//                                     <>
//                                         {order.cartItems.map((item, index) => {
//                                             const { id, productImageUrl, title, category, price, quantity } = item
//                                             return (
//                                                 <tr key={index} className="text-orange-300">
//                                                     <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 ">
//                                                         {index + 1}
//                                                     </td>

//                                                     <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 ">
//                                                         {id}
//                                                     </td>

//                                                     <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                                                         <img src={productImageUrl} alt="img" />
//                                                     </td>

//                                                     <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                                                         {title}
//                                                     </td>

//                                                     <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                                                         {category}
//                                                     </td>

//                                                     <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                                                         ₹{price}
//                                                     </td>

//                                                     <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                                                         {quantity}
//                                                     </td>

//                                                     <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                                                         ₹{price * quantity}
//                                                     </td>

//                                                     <td className="h-12 px-6 text-md transition duration-300 border-t border-l text-green-600  first:border-l-0 border-orange-100 stroke-slate-500  first-letter:uppercase ">
//                                                         {order.status}
//                                                     </td>

//                                                     <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                                                         {order.addressInfo.name}
//                                                     </td>

//                                                     <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                                                         {order.addressInfo.address}
//                                                     </td>

//                                                     <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                                                         {order.addressInfo.pincode}
//                                                     </td>

//                                                     <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                                                         {order.addressInfo.mobileNumber}
//                                                     </td>

//                                                     <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 ">
//                                                         {order.email}
//                                                     </td>

//                                                     <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">
//                                                         {order.date}
//                                                     </td>

//                                                     <td onClick={()=> deleteProduct(order.id)} className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500  text-red-500 cursor-pointer ">
//                                                         Delete
//                                                     </td>
//                                                 </tr>
//                                             )
//                                         })}
//                                     </>
//                                 )
//                             })}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default OrderDetail;














import React, { useContext, useState } from "react";
import myContext from "../../context/myContext";

const OrderDetail = () => {
    const context = useContext(myContext);
    const { getAllOrder, deleteProduct } = context;
    
    const [orderStatus, setOrderStatus] = useState(getAllOrder.map(order => ({
        id: order.id,
        status: order.status,
        editing: false
    })));

    const handleStatusChange = (orderId, newStatus) => {
        setOrderStatus(prevStatus =>
            prevStatus.map(order =>
                order.id === orderId ? { ...order, status: newStatus, editing: false } : order
            )
        );
    };

    const toggleEditing = (orderId) => {
        setOrderStatus(prevStatus =>
            prevStatus.map(order =>
                order.id === orderId ? { ...order, editing: !order.editing } : order
            )
        );
    };

    // Calculate total profit
    const totalProfit = getAllOrder.reduce((acc, order) => {
        const orderTotal = order.cartItems.reduce((orderAcc, item) => {
            return orderAcc + item.price * item.quantity;
        }, 0);
        return acc + orderTotal;
    }, 0);

    return (
        <div>
            <div>
                <div className="py-5">
                    <h1 className="text-xl text-orange-300 font-bold">All Orders</h1>
                    <h2 className="text-lg text-orange-500 font-bold">Total Profit: ₹{totalProfit}</h2>
                </div>

                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border border-collapse sm:border-separate border-orange-100 text-orange-400">
                        <tbody>
                            <tr>
                                <th scope="col" className="h-12 px-6 text-md border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100 font-bold fontPara">S.No.</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">Order Id</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">Image</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">Title</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">Category</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">Price</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">Quantity</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">Total Price</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">Status</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">Name</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">Address</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">Pincode</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">Phone Number</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">Email</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">Date</th>
                                <th scope="col" className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-orange-100 text-slate-700 bg-slate-100">Action</th>
                            </tr>
                            {getAllOrder.map((order, orderIndex) => {
                                const currentOrderStatus = orderStatus.find(o => o.id === order.id);
                                return (
                                    <>
                                        {order.cartItems.map((item, itemIndex) => {
                                            const { id, productImageUrl, title, category, price, quantity } = item;
                                            return (
                                                <tr key={itemIndex} className="text-orange-300">
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 ">{itemIndex + 1}</td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 ">{id}</td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase "><img src={productImageUrl} alt="img" /></td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">{title}</td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">{category}</td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">₹{price}</td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">{quantity}</td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">₹{price * quantity}</td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-green-600 first-letter:uppercase ">
                                                        {currentOrderStatus.editing ? (
                                                            <select
                                                                value={currentOrderStatus.status}
                                                                onChange={(e) => handleStatusChange(order.id, e.target.value)}
                                                                className="text-slate-700"
                                                            >
                                                                <option value="Confirm">Confirm</option>
                                                                <option value="Processing">Processing</option>
                                                                <option value="wait for 15 mins">15 mins</option>
                                                                <option value="wait for 5 mins">5 mins</option>
                                                                <option value="Delivered">Delivered</option>
                                                            </select>
                                                        ) : (
                                                            <span onClick={() => toggleEditing(order.id)}>{currentOrderStatus.status}</span>
                                                        )}
                                                    </td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">{order.addressInfo.name}</td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">{order.addressInfo.address}</td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">{order.addressInfo.pincode}</td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">{order.addressInfo.mobileNumber}</td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 ">{order.email}</td>
                                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-slate-500 first-letter:uppercase ">{order.date}</td>
                                                    <td onClick={() => deleteProduct(order.id)} className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-orange-100 stroke-slate-500 text-red-500 cursor-pointer ">Delete</td>
                                                </tr>
                                            );
                                        })}
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
