import React from "react"
import { Lottie } from "@crello/react-lottie"

export default class LottieAnimation extends React.Component {
  constructor(props) {
    super(props)
    this.state = { playingState: "stopped" }
    this.selector = React.createRef()
  }

  componentDidMount() {
    window.addEventListener("scroll", this.checkVisible)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.checkVisible)
  }

  checkVisible = e => {
    let rect = this.selector.current.getBoundingClientRect()
    let viewHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight
    )
    if (!(rect.bottom < 100 || rect.top - viewHeight >= -100)) {
      setTimeout(
        function() {
          this.setState({ playingState: "playing" })
        }.bind(this),
        500
      )
    }
  }

  render() {
    return (
      <div ref={this.selector}>
        <Lottie
          height={this.props.height || "100%"}
          width={this.props.width || "100%"}
          playingState={this.state.playingState || "stopped"}
          config={{
            animationData: this.props.animationData,
            loop: false,
            autoplay: false,
          }}
        />
      </div>
    )
  }
}
