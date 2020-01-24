import React, { Component } from "react";

class BeerItem extends Component {
  state = {
    liked: false
  };

  likePost = () => this.setState({ liked: !this.state.liked });

  render() {
    const message = this.state.liked
      ? "you liked this post"
      : "this post has no likes";
    const color = this.state.liked ? "green" : "red";
    return (
      <div style={{ border: "1px dashed gray", padding: "50px" }}>
        <p>{this.props.info.name}</p>
        <p style={{ color: "blue" }}>{this.props.info.brewers_tips}</p>
        <button onClick={this.likePost}>Like</button>
        <p style={{ color }}>{message}</p>
      </div>
    );
  }
}

export default BeerItem;
