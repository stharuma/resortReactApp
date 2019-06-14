import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
   // console.log("props",this.props);
    this.state ={
      slug:this.props.match.params.slug,
      defaultBcg
    }
  }
 static contextType = RoomContext;
  //componentDidMount() {}

  render() {
    const {getRoom} = this.context;
    const room =getRoom(this.state.slug);
    //console.log(room);
    if(!room){
      return <div className="error">
      <h4>no such room could not found....</h4>
      <Link to='/rooms' className="btn-primary">
      back to rooms
      </Link>
      </div>
    }
    const {name, description, capacity, size, price, extras, brakfast,pets, images}= room;
    
    return( 
      <Hero className="roomsHero">
      <Banner title={`${name} room`}>
      <Link to='/rooms' className="btn-primary">
      back to rooms
      </Link>
      </Banner>

      </Hero>
      );
   }
}
