//handles translating the element in the x-direction on scroll

import React from "react"

export default class SVGWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = { translate: 0 }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll = e => {
    this.setState({
      translate: window.scrollY * this.props.scrollFactor,
    })
  }

  render() {
    return (
      <div
        style={{
          position: "absolute",
          padding: "0px",
          margin: "0px",
          height: "auto",
          left: this.props.left,
          bottom: this.props.bottom,
          zIndex: this.props.zIndex,
          transform: "translateX(" + this.state.translate + "px)",
          transition: "transform 1.5s ease-out",
        }}
      >
        {this.props.children}
      </div>
    )
  }
}
