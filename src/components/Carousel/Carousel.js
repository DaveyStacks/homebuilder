import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import data from "../../data.json";
import axios from "axios";
import "./Carousel.css"

class ControlledCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      index: 0,
      direction: null,
      showCarousel: true,
      loading: false
    }
    console.log(this.state);
  }

  render() {
    const { index, direction } = this.state;
    let availableNeighborhoods;
    console.log(this.state.data.data.communities);
    availableNeighborhoods = this.state.data.data.communities.map((data, index) =>
      <div>
        <Carousel.Item name={data.name}>
          <img width={900} height={500} alt="900x500" src={`https://res.cloudinary.com/renderinghouse/image/upload/app/demo/thumbnails/${data.thumb}`} />
          <Col xs={12} sm={12} md={5} lg={5}>
            <div>
              <br />
              <br />
              <img width={200} height={250} alt="200x200" src={`https://res.cloudinary.com/renderinghouse/image/upload/app/demo/assets/custom/${data.logo}`} />

            </div>
            <br /><br />
            <Link to={`/hoodname/${data.name}`} activeClassName="active">Click here to view available models in {data.name}</Link>
          </Col>

          <br /><br />
        </Carousel.Item>
      </div>

    )


    return (
      <div>
        <h1>Welcome to Tamagachi Homes</h1>
        <br /><br />
        <Carousel className="Carousel"
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          {availableNeighborhoods.map(c => {
            return <Carousel.Item>{c}</Carousel.Item>
          })}
        </Carousel>
      </div>
    );

  }
}
export default ControlledCarousel;