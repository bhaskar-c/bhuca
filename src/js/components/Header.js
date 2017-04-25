import React from "react";

import SiteTitle from "./Header/SiteTitle";

export default class Header extends React.Component {
  render() {
    return ( <
      div id = "header" >
          <SiteTitle / >
      </div>
    );
  }
}
