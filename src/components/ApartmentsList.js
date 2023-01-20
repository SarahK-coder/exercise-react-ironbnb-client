import { Link } from 'react-router-dom';

function ApartmentsList(props) {
  return (
    <>
      <h1>View all Apartments</h1>
      <div className='row row-cols-1 row-cols-md-3 g-4 ms-2 me-2'>
        {props.apartmentsArr === null
          ? 'Loading...'
          : props.apartmentsArr.map((apartmentDetails, index) => {
              return (
                <div className='col' key={index}>
                  <div className='card'>
                    <div className='card-title text-truncate'><h2>{apartmentDetails.title}</h2></div>
                    <Link className='btn btn-dark' to={'/apartment/' + apartmentDetails._id}>More Details</Link>
                  </div>
                </div>
              )
          })}
      </div>
    </>
  )
}

export default ApartmentsList;