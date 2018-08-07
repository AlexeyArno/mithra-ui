import * as React from 'react'
import SearchBtnPic from './SearchBtnPic/SearchBtnPic'

require('./SearchBtn.scss')

class SearchBtn extends React.Component<{}, {}>{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div className="SearchBtn">
                <SearchBtnPic/>
            </div>
        )
    }

   
     
}

export default SearchBtn