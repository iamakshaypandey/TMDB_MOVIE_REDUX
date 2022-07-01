import React from 'react'
import { useEffect } from 'react'
import { fetchUsers } from '../redux/main/MainAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const MainBar = ({ userData, fetchUsers }) => {
  // const movies = [...userData]

  console.log(userData, "shub");

  useEffect(() => {
    fetchUsers()
    // eslint-disable-next-line 
  }, [fetchUsers])




  return (
    <>
      <div className='container mx-auto'>
        <h1 className='card-redius text-p-overview-h bg-dark mt-3 text-info'>Movies user Search</h1>
        <div className='row'>
          {userData && userData.users && userData["users"]?.map((user) => {
            return (
              <div
                key={user.id}
                className="card-redius card bg-colore-card text-p-overview m-4 col-4 col-md-3 col-sm-4  w-25 "
                style={{
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  height: '500px',
                  backgroundImage: `linear-gradient(rgb(57 107 131 / 98%), rgba(0, 0, 0, 0.5)),url(https://image.tmdb.org/t/p/w220_and_h330_face${user?.backdrop_path})`,
                }}>
                <div className="card-body d-flex justify-content-end align-items-end">
                </div>
                <h4 className="text-light card-title text-p-overview-h">{user.title}</h4>
                <strong className="card-text text-light ">{user.release_date}</strong>
                <Link to={`/MovieDetails/${user.id}`}>
                  <button className='btn btn-outline-info m-4'>Chack Details</button>
                </Link>
              </div>
            )
          })
          }
        </div>
      </div>
    </>
  )
}


const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBar)