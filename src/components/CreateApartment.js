import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateApartment(props) {
  const [title, setTitle] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //const lastId = Math.max(...props.moviesArr.map(element => element.id));

    const newApartment = {
        "title": title,
        "pricePerDay": pricePerDay,
        "img": img
    };
    axios
      .post('https://ironbnb-m3.herokuapp.com/apartments', newApartment)
      .then(response => {
        props.callbackToUpdateList();
        navigate('/apartments');
      })
      .catch((error) => {
        console.log('Error creating a new Apartment...', error)
      });

    //clear form
    setTitle("");
    setPricePerDay("");
    setImg("");
  }

  return (
    <>
      <h1>Create a new Apartment</h1>
        <form name="formData" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Title </label>
          <div className="col-sm-10">
            <input type="text" name="title" className="form-control" placeholder="Enter the Title" required={true} value={title} onChange={(e) => {setTitle(e.target.value)}} />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Price per Day </label>
          <div className="col-sm-10">
            <input type="number" name="pricePerDay" className="form-control" required={true} placeholder="50" min="50" max="3000" value={pricePerDay} onChange={(e) => {setPricePerDay(e.target.value)}} />
          </div>
        </div>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Image </label>
          <div className="col-sm-10">
            <input type="text" name="img" className="form-control" required={false} placeholder="Paste the link to image" value={img} onChange={(e) => {setImg(e.target.value)}} />
          </div>
        </div>
          <button className='btn btn-success'>Create</button>
      </form>
    </>
  )
}

export default CreateApartment;