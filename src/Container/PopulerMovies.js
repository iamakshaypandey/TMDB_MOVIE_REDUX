import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchUsersone } from '../redux/Populer/PopulerAction'
import { connect } from 'react-redux';



 export const PopulerMovies = ({ userData, fetchUsersone }) => {
    
    useEffect(() => {
        fetchUsersone()
    }, [fetchUsersone])
  return (
    
    <div className='container mx-auto'>
    <h1 className='card-redius text-p-overview-h bg-dark mt-3 text-info'>Movies Populer Search</h1>
      <div className='row'>
        {userData.users.map((populer) => {
          return (
            <div
              key={populer.id}
              className="card-redius card bg-colore-card text-p-overview m-4 col-4 col-md-3 col-sm-4  w-25 "
              style={{
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                height:'500px',
                backgroundImage: `linear-gradient(rgb(57 107 131 / 98%), rgba(0, 0, 0, 0.5)),url(https://image.tmdb.org/t/p/w220_and_h330_face${populer?.backdrop_path})`,
                 }}>
              <div className="card-body d-flex justify-content-end align-items-end">
              </div>
                <h4 className="text-light card-title text-p-overview-h">{populer.title}</h4>
                <strong className="card-text text-light ">{populer.release_date}</strong>
                <Link to={`/MovieDetails/${populer.id}`}>
                  <button className='btn btn-outline-info m-4'>Chack Details</button>
                </Link>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}


const mapStateToProps = state => {
    return {
        userData: state.Populeruser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsersone: () => dispatch(fetchUsersone())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PopulerMovies)
