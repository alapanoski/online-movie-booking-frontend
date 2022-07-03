function Checkout() {
    let cart = [{
        "id": "62b44ea545be12d80414fbca",
        "name": "Spider-Man: No Way Home",
        "quantity": 2,
        "rate": 108
    }, {
        "id": "62b44ea572eb9e14d121b55f",
        "name": "Convenience fees",
        "quantity": 1,
        "rate": 28.3
    }, {
        "id": "62b44ea5b4c8525310d34c03",
        "name": "Popcorn",
        "quantity": 3,
        "rate": 28.3
    }];

    let amountPayable = 0;
    cart.forEach((item) => {
        amountPayable += item.rate * item.quantity;
    })
    amountPayable = amountPayable.toFixed(2);
    return (
        <>
            <div
                className="min-h-[50rem] max-w-md mx-auto text-white flex flex-col justify-between">
                <p className="m-4 text-4xl text-center font-bold">Booking Summary</p>
                <div
                    className="p-4 flex flex-col justify-center items-center divide-y divide-dotted">
                    {cart.map((item) => (
                        <div key={item.id} className="w-full p-2 flex flex-row justify-between items-center">
                            <p>{item.name} × {item.quantity}</p>
                            <p>Rs. {item.rate * item.quantity}</p>
                        </div>
                    ))}
                </div>
                <div className="p-5 text-2xl flex flex-row justify-between">
                    <p>Amount Payable</p>
                    <p>Rs. {amountPayable}</p>
                </div>
                <div className="m-1 mx-auto rounded flex flex-col justify-between items-center">
                    <button className="bg-red-800 rounded-3xl w-auto p-3">
                        <a href={'end'}>Proceed To Pay</a>
                    </button>
                    <p className="p-2 text-center">
                        <a className="text-red-800" href="src/components/BookingSummary#">Cancellation Policy</a>
                    </p>
                </div>
            </div>
        </>

    )
}

export default Checkout;