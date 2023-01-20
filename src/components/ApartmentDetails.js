import { Link, useNavigate, useParams } from 'react-router-dom';

function ApartmentDetails(props) {
  const {apartmentId} = useParams(); // check if it's returning a string!
  const navigate = useNavigate();
  const details = props.apartmentsArr.find(apartmentDetails => {
    return apartmentDetails._id == apartmentId;
  });

  const renderDetails = () => {
    return (
      <div className='card col-4 m-auto mt-3 mb-3' key={details._id}>
        {details.img 
        ? <img className='card-img-top' src={details.img} alt={details.title} /> 
        : <img className='card-img-top' src='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-lists/ironbnb-house.58.png' alt='No Picture' />}
        <div className='card-body'>
          <div className='card-title'>{details.title}</div>
          <div className='card-text'>Price per Day: {details.pricePerDay}</div>
          <div className='card-text mt-3'><button className="btn btn-danger">Delete</button></div>
          {/*<button class="btn btn-danger" onClick={()=>{deleteApartment(details._id)}}>Delete</button>*/}
        </div>
      </div>
    )
  }

  return(
    <>
    <div className='cards'>
        {details && renderDetails()}
    </div>
    <Link className='btn btn-light' to='/apartments'>Back</Link>
    </>
  )
}

export default ApartmentDetails;