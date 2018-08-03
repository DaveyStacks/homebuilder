import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";
import data from "../../data.json";
import axios from "axios";
import "./Carousel.css"

class ControlledCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      data: data,
      index: 0,
      direction: null,
      showCarousel: true,
      loading: false
    }
    console.log(this.state);
  }

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    // console.log(this.props.pathName);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    // console.log(this.state);
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }



  render() {
    const { index, direction } = this.state;
    let availableNeighborhoods;
    console.log(this.state.data.data.communities);
    availableNeighborhoods = this.state.data.data.communities.map((data, index) =>
      <div>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={`https://res.cloudinary.com/renderinghouse/image/upload/app/demo/thumbnails/${data.thumb}`} />
          <Col xs={12} sm={12} md={5} lg={5}>
            <div>
              <br />
              <br />
              <img width={200} height={200} alt="200x200" src={`https://res.cloudinary.com/renderinghouse/image/upload/app/demo/assets/custom/${data.logo}`} />

            </div>
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