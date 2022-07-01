import React, { useEffect } from 'react'
import { fetchUsersThree } from '../redux/MovieDetails/MovieDetailsAction';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';


export const MovieDetails = ({userData,fetchUsersThree}) => {

    const { id } = useParams()

    useEffect(() => {
        fetchUsersThree(id)
        // eslint-disable-next-line 
    }, [fetchUsersThree]);

    return (
        <>
            <div className=' container'>
                <div className='img-back m-auto' style={{
                    backgroundImage: `linear-gradient(rgb(57 107 131 / 98%), rgba(0, 0, 0, 0.5)),url(https://image.tmdb.org/t/p/w220_and_h330_face${userData.users?.backdrop_path})`,
                     }}>
                    <div className='d-flex justify-content-center align-item-center flex-wrap'>
                        <div className='p-4'>
                            <img className="card-img-top movie-img-wh  " src={`https://image.tmdb.org/t/p/w220_and_h330_face${userData.users?.poster_path}`} alt="DATAIMAGE NOT FOUND" />
                        </div>
                        <div className=' m-4 shadow details-background rounded  w-75'>
                            <div className='text-left'>
                                <strong className='text-col'>Movie Name: </strong>
                                <h3 className='text-p-overview-h font-weight-bold'>{userData.users?.original_title}({userData.users?.release_date ? userData.users?.release_date.slice(0, 4) : ''})</h3>
                                <p className='font-weight-bold text-col'>Language:<span className='m-2 mb-0'>({userData.users?.original_language})</span></p>
                                <strong className='text-col'>Release Date: </strong>
                                <span className='font-weight-bold text-col-p'>{userData.users?.release_date}</span>
                                <br/>
                                <strong className='text-col font-weight-bold'>Overview:</strong>
                                <p className='text-dark font-weight-bold text-col-p text-p-overview'>{userData.users?.overview}</p>
                                <strong className='text-col'>popularity:</strong>
                                <span className='m-2 font-weight-bold text-col-p'>{userData.users?.popularity}</span>
                                <br />
                                <strong className='text-col'>Vote Average:</strong>
                                <span className='m-2 font-weight-bold text-col-p'>{userData.users?.vote_average}</span>
                                <br />
                                <strong className='text-col'>Vote count:</strong>
                                <span className='m-2 font-weight-bold text-col-p'>{userData.users?.vote_count}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const mapStateToProps = state => {
    return {
        userData: state.MovieDetailsuser
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        fetchUsersThree: (id) => dispatch(fetchUsersThree(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
