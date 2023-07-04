// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {userDetails} = props
  const {title, description, publishedDate} = userDetails

  return (
    <div className="blog-item-container">
      <div className="post-container">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <p className="date">{publishedDate}</p>
      <hr />
    </div>
  )
}

export default BlogItem
