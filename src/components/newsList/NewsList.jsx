import withSkeleton from "../../helpers/hocs/withSkeleton/withSkeleton";
import NewsItem from "../newsItem/NewsItem"

import styles from "./styles.module.css"

function NewsList({items}) {
  return (
    <ul className={styles.list}>
      {items.map((item)=><NewsItem item={item} key={item.id}/>)}
    </ul>
  )
}

const newsListWithSkeleton = withSkeleton(NewsList, "item", 10)

export default newsListWithSkeleton;