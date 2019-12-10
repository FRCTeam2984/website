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
        css={{
          position: "absolute",
          padding: "0px",
          margin: "0px",
          overflowY: "hidden",
          width: this.props.width || "initial",
          maxWidth: this.props.maxWidth || "initial",
          height: this.props.height || "initial",
          maxHeight: this.props.maxHeight || "initial",
          left: this.props.left || "initial",
          bottom: this.props.bottom || "initial",
          top: this.props.top || "initial",
          right: this.props.right || "initial",
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
