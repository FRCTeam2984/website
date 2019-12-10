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
          width: this.props.width || "auto",
          maxWidth: this.props.maxWidth,
          height: this.props.height || "auto",
          maxHeight: this.props.maxHeight,
          left: this.props.left || "auto",
          bottom: this.props.bottom || "auto",
          top: this.props.top || "auto",
          right: this.props.right || "auto",
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
