import * as React from 'react'
import SearchBtnPic from './SearchBtnPic/SearchBtnPic'
import { withRouter } from 'react-router'

require('./SearchButton.scss')

interface SearchButtonProps{
  open: any
}

class SearchButtonComponent extends React.Component<SearchButtonProps, {}>{
  constructor(props) {
    super(props);
  }
    
  render(){
    return(
      <div className={(this.props.open==true)? "SearchBtn":"SearchBtn"}>
        {(this.props.open==true)?<div className="TextSearch">Search</div>:<SearchBtnPic/>}
      </div>
    )
  }
}

const mapStateToProps = (state:any, ownProps:any) =>{
  //   console.log(state.leftBarStateReducer)
  return {
    open: state.leftBarStateReducer.leftBarIsOpen,
    ...ownProps
  }
}
  
const mapDispatchToProps = dispatch =>
  bindActionCreators({}, dispatch);
  
export const SearchButton = connect(mapStateToProps, mapDispatchToProps)(SearchButtonComponent)