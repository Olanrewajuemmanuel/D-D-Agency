
export default function index({ article: { title, author } }) {
    return (
        <div>
           <h3>{title}</h3> 
           <p>{author}</p>
        </div>
    )
}

export const getStaticProps = async (context) => {
    const response = await fetch(`http://localhost:8001/articles/${context.params.id}`)
    const article = await response.json()
    return {
        props: {
            article
        }
    }
}
export const getStaticPaths = async () => {
    const response = await fetch(`http://localhost:8001/articles`)
    const articles = await response.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params: {id: id.toString()}}))
    return {
        paths,
        fallback: false
    }
}