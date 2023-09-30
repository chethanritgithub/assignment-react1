import YoutubeCard from "../youtubeCard/youtubeCard";
import styles from './youtubeApp.module.css'
const YoutubeApp=(props)=>{
    const {data}=props
    return <div className={styles.container}>
        {
            data.map(item=><YoutubeCard dataitem={item}/>)
        }
    </div>
  }
  export default YoutubeApp;