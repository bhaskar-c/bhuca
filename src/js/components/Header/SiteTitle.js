import React from "react";


export default class SiteTitle extends React.Component {

  render() {
    return (
      <h1 id='siteTitle'>{this.props.siteTitle || 'DefaultProp'}</h1>
    );
  }
}
