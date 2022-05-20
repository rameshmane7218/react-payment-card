import React from "react";
import style from "./CardInput.module.css";

export const CardInput = ({ data, setData, details }) => {
  let { date, logo, heading, subheading, devices, color } = details;

  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };

  return (
    <div className={style.formData}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Heading</label>
        {/* <br /> */}
        <input
          type="text"
          name="heading"
          value={heading}
          placeholder="Enter Heading"
          onChange={handleChange}
        />
        {/* <br /> */}
        <label htmlFor="">Select Date</label>
        {/* <br /> */}
        <input type="date" name="date" value={date} onChange={handleChange} />
        {/* <br /> */}
        <label htmlFor="">Enter Subheading</label>
        {/* <br /> */}
        <input
          type="text"
          name="subheading"
          value={subheading}
          placeholder="Enter Subheading"
          onChange={handleChange}
        />
        {/* <br /> */}

        <label htmlFor="">Paste Logo link</label>
        {/* <br /> */}
        <input
          type="text"
          name="logo"
          value={logo}
          placeholder="Logo link"
          onChange={handleChange}
        />
        {/* <br /> */}
        <label htmlFor="">Enter Device Name</label>
        {/* <br /> */}
        <input
          type="text"
          name="devices"
          value={devices}
          placeholder="Device Name"
          onChange={handleChange}
        />
        {/* <br /> */}
        <label htmlFor="">Enter Color of Card</label>
        {/* <br /> */}
        <input
          type="text"
          name="color"
          value={color}
          placeholder="Card Color"
          onChange={handleChange}
        />
        {/* <br /> */}
        <input type="submit" value="Submit Details" />
      </form>
    </div>
  );
};

