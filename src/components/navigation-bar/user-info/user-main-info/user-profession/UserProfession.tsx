import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { withRouter } from "react-router";

require("./UserProfession.scss");

interface UserProfessionProps {
  open: any;
}

class UserProfessionComponent extends React.Component<UserProfessionProps, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    const prof = "designer";
    return(
      <div  className="UserProfessionStyle">
        {prof}
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

export const UserProfession = connect(mapStateToProps, mapDispatchToProps)(UserProfessionComponent);
