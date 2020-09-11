import React, { Component } from 'react'
import SearchForm from './SearchForm'
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner';
import MoviesContainer from '../home/MoviesContainer'
export class Landing extends Component {
    render() {
        console.log(this.props);
        const {loading} =this.props.loading;
        return (
            <div className="container">
                <SearchForm/>
                {loading ? <Spinner/>:<MoviesContainer/>}
            </div>
        );
    }
}
const mapStateToProps= state =>({
    loading:state.movies.loading
})
export default connect(mapStateToProps)(Landing);