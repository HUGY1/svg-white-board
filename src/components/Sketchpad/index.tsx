import * as React from 'react'
import styles from './index.module.css'
interface SketchpadProps {

}
interface State {
  beginDraw: boolean
}
export default class Sketchpad extends React.Component<SketchpadProps, State> {
  svgRef: React.RefObject<SVGSVGElement >;
  constructor(props: SketchpadProps) {
    super(props)
    this.svgRef = React.createRef()
    this.state = {
      beginDraw: false
    }
  }
  handleMouseDown(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    this.getPosition(e)
    this.setState({
      beginDraw: true
    })
  }
  handleMouseMove(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    e.preventDefault();

    const { beginDraw } = this.state
    if (beginDraw) {
      console.log(e)
    }

  }
  handleMouseUp(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    this.setState({
      beginDraw: false
    })
    console.log(e)

  }

  getPosition(e: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    console.log(this.svgRef.current)
    return e
  }

  render() {
    return (
      <svg className={styles.swb_board}
        ref={this.svgRef}
        onMouseDown={this.handleMouseDown.bind(this)}
        onMouseMove={this.handleMouseMove.bind(this)}
        onMouseUp={this.handleMouseUp.bind(this)}
      ></svg>
    )
  }
}