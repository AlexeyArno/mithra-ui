import * as React from 'react'
import FollowersPic from './FollowersPic/FollowersPic'

require('./FollowersBtn.scss')


class FollowersBtn extends React.Component<{}, {}>{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div className="FllwrsBtn">
                <FollowersPic/>
            </div>
        )
    }   
}

export default FollowersBtn