import React from "react";
import {
  connect
} from "react-redux"
import Footer from "./Footer";
import Header from "./Header";
import SynthUI from "./SynthUI"

import { fetchUser } from "../actions/userActions"

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,

  };
})
export default class Layout extends React.Component {

    componentWillMount() {
      this.props.dispatch(fetchUser())
    }

    render() {
      const {
        user
      } = this.props;

        return (

          <div >
          <Header />
            <SynthUI / >

          <h1> {
            user.name
          } < /h1>
          </div>
        );
      }
    }
