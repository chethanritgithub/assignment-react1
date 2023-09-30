
import styles from './youtubeCard.module.css'
const YoutubeCard=(props)=>{
    const {dataitem}=props;
    return <div className={styles.container}>
        <div className={styles.thumbnail}>
            <img src={dataitem.thumbnailUrl} alt={dataitem.title} />
        </div>
        <div className={styles.title}>
            <p>{dataitem.title}</p>
        </div>
        <div className={styles.channel}>
            <img src={dataitem.channelLogoUrl} alt={dataitem.channelName} />
            <p>{dataitem.channelName}</p>
        </div>
        <div className={styles.reactions}>
            <p>views:{dataitem.views/1000}k</p>
            <p>views:{dataitem.likes/1000}k</p>
        </div>
    </div>
  }
  export default YoutubeCard;