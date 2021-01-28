import * as React from 'react'
import styles from './styles.module.css'
import Sketchpad from './components/Sketchpad'
interface Props {

}

export class SvgWhiteBoard extends React.Component<Props> {
  componentDidMount(){
    
  }

  render() {
    return (
      <div className={styles.swb_container}>
        <Sketchpad /> 
      </div>
    )
  }
}