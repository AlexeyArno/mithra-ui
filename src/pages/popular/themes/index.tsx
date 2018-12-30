import * as React from "react";
import { observer, inject } from "mobx-react";
import { IPopularTheme } from "src/interfaces/popular_page";
require("./styles.scss");

interface IThemesProps {
  data?: IPopularTheme[];
}

@inject("store")
@observer
class Themes extends React.Component<IThemesProps> {
  constructor(props) {
    super(props);
  }

  public render() {
    const themes: IPopularTheme[] = this.props.data;
    // console.log(this.props.store)
    return(
      <div className="themes">
        Themes
      </div>
    );
  }
}

export default Themes;
