// @flow
import React from 'react'
import Waypoint from 'react-waypoint'
import _ from 'lodash'

type ImageType = {
  src: string,
  aspectRatio: number,
}

type ImageProps = {
  data: ImageType,
}

type State = {
  imagePaddingBottom: number,
  imageLoaded: boolean,
  beginImageLoad: boolean,
}

class Image extends React.Component<ImageProps, State> {
  constructor(props: ImageProps) {
    super(props)
    this.state = {
      imagePaddingBottom: 0,
      imageLoaded: false,
      beginImageLoad: false,
    }
    this.calculatePadding = _.debounce(this.calculatePadding, 100, {
      leading: true,
    })
  }

  componentDidMount() {
    this.calculatePadding()
    window.addEventListener('resize', this.calculatePadding)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculatePadding)
  }

  onImageLoad = () => {
    this.setState({
      imageLoaded: true,
    })
  }

  calculatePadding = () => {
    const { data } = this.props
    if (!this.imgDiv) return
    this.setState({
      imagePaddingBottom: this.imgDiv.clientWidth / data.aspectRatio,
    })
  }

  imgDiv: ?Object

  render() {
    const { beginImageLoad, imagePaddingBottom, imageLoaded } = this.state
    const { data } = this.props
    return (
      <div>
        <Waypoint onEnter={() => this.setState({ beginImageLoad: true })} />
        {/* this img is for loading the image */}
        {beginImageLoad ? (
          <img
            src={data.src}
            alt=""
            style={{ display: 'none' }}
            onLoad={this.onImageLoad}
          />
        ) : null}
        {/* this div is for loading animation + sizing */}
        <div
          ref={div => {
            this.imgDiv = div
          }}
          style={{
            background: '#ddd',
            paddingBottom: imagePaddingBottom,
            position: 'relative',
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 3px 9px 0 #eaeaef',
          }}
        >
          {/* this div is for the actual image */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundImage: imageLoaded ? `url(${data.src})` : 'none',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              opacity: imageLoaded ? '1' : '0',
              transition: 'opacity .4s',
            }}
          />
        </div>
      </div>
    )
  }
}

export default Image
