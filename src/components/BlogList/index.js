// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div>
      <ul>
        {blogsList.map(eachValue => (
          <BlogItem userDetails={eachValue} key={eachValue.id} />
        ))}
      </ul>
    </div>
  )
}
export default BlogList
