import React from "react"

//handles flexbox container, defaults to row
export class FlexBox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        css={{
          display: "flex",
          flexDirection: this.props.flexDirection || "row",
          flexWrap: this.props.flexWrap || "initial",
          justifyContent: this.props.justifyContent || "initial",
          alignItems: this.props.alignItems || "intial",
          padding: this.props.padding || "initial",
          margin: this.props.margin || "initial",
          width: this.props.width || "initial",
          height: this.props.height || "initial",
        }}
      >
        {this.props.children}
      </div>
    )
  }
}

//handles items in flexboxes
export class FlexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div
        css={{
          flex: this.props.flex || "auto",
          padding: this.props.padding || "initial",
          margin: this.props.margin || "initial",
          minWidth: this.props.width || "initial",
          width: this.props.width || "initial",
          maxWidth: this.props.width || "initial",
          minHeight: this.props.height || "initial",
          height: this.props.height || "initial",
          maxHeight: this.props.height || "initial",
          textAlign: this.props.textAlign || "initial",
        }}
      >
        {this.props.children}
      </div>
    )
  }
}
