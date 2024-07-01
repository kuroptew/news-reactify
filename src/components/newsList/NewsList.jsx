import NewsItem from "../newsItem/NewsItem"

import styles from "./styles.module.css"

function NewsList({items}) {
  return (
    <ul className={styles.list}>
      {items.map((item)=><NewsItem item={item} key={item.id}/>)}
    </ul>
  )
}

export default NewsList