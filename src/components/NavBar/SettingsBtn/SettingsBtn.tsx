import * as React from 'react'
import SettingsBtnPic from './SettingsBtnPic/SettingsBtnPic'

require('./SettingsBtn.scss')


class SettingsBtn extends React.Component<{}, {}>{
    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div className="SettingsBtn">
                <SettingsBtnPic/>  
            </div>
        )
    }
}

export default SettingsBtn