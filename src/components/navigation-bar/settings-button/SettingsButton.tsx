import * as React from "react";
import SettingsBtnPic from "./SettingsBtnPic/SettingsBtnPic";
import { withRouter } from "react-router";

require("./SettingsButton.scss");

interface SettingsButtonProps {
  open: any;
}

class SettingsButtonComponent extends React.Component<SettingsButtonProps, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    return(
      <div className="SettingsBtn">
        {(this.props.open == true) ? <div className="TextSettings">Settings</div> : <SettingsBtnPic/>}
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => {
  //   console.log(state.leftBarStateReducer)
  return {
    open: state.leftBarStateReducer.leftBarIsOpen,
    ...ownProps,
    };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({}, dispatch);

export const SettingsButton = connect(mapStateToProps, mapDispatchToProps)(SettingsButtonComponent);
