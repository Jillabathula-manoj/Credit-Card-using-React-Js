import React, { useState } from "react";

const CreditCard = () => {
    const[info, setInfo] = useState({
        fullName: '',
        cardNumber: '',
        cardMonth: '',
        cardYear: ''
    });

    const handleChangeForm = (e) => {
        setInfo({
            ...info, [e.target.name]: e.target.value
        });
    }
    return(
        <div className="container">
            <form>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  onChange={handleChangeForm}
                  />
                  <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  maxLength={16}
                  onChange={handleChangeForm}
                  />
                  <input
                  type="text"
                  name="cardMonth"
                  placeholder="Card Month" //Expiry date
                  maxLength={2}
                  onChange={handleChangeForm}
                  />
                  <input
                  type="text"
                  name="cardYear"
                  placeholder="Card Year" //Expiry date
                  maxLength={2}
                  onChange={handleChangeForm}
                  />
            </form>

            <div className="cardCreadit">
                <div className="elements">
                    <h1>{info.fullName}</h1>
                    <p>{info.cardNumber}</p>
                    <span>{info.cardMonth}/{info.cardYear}</span>
                </div>
            </div>
        </div>
    );
}
export default CreditCard;