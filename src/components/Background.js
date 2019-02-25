import Two from 'two.js'
import React from 'react'

class Background extends React.Component {
  constructor(props) {
    super(props)
    this.el = React.createRef()
    this.config = {
      circles: {
        count: 5,
        radii: [100, 200, 400],
        colors: ['#2b56d411', '#55555511', '#2b56d411'],
      },
    }
  }

  componentDidMount() {
    this.two = new Two({
      width: window.innerWidth,
      height: window.innerHeight,
    }).appendTo(this.el.current)

    const group = this.two.makeGroup()
    this.two.add(group)
    for (let i = 0; i < this.config.circles.count; i += 1) {
      // Construct circles at multiples of (width / count).
      const circle = this.two.makeCircle(
        (1 / this.config.circles.count) * this.two.width * i,
        (1 / this.config.circles.count) * this.two.height * i,
        this.config.circles.radii[i % this.config.circles.radii.length]
      )
      circle.fill = '#fff0'
      circle.linewidth = 2
      circle.stroke = this.config.circles.colors[
        i % this.config.circles.colors.length
      ]
      group.add(circle)
    }

    this.two
      .bind('update', () => {
        for (let i = 0; i < group.children.length; i += 1) {
          const { height } = group.children[i].getBoundingClientRect()
          group.children[i].translation.y -= height / 1000
          if (group.children[i].translation.y < 0 - height / 2) {
            // Send it to the other side of the window
            group.children[i].translation.y = this.two.height + height / 2
            // Re-calculate x-positions.
            // Ensures that if we resize a window, circles aren't constrained
            // to the earlier size of the viewport.
            group.children[i].translation.x =
              (1 / this.config.circles.count) * this.two.width * i
          }
        }
      })
      .play()
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    this.two.unbind('update')
    window.removeEventListener('resize', this.onResize)
  }

  onResize = () => {
    this.two.width = window.innerWidth
    this.two.height = window.innerHeight
  }

  render() {
    return (
      <div
        style={{
          position: 'fixed',
          overflow: 'hidden',
          zIndex: -1,
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        ref={this.el}
      />
    )
  }
}

export default Background
