import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";


function NewsBoard({ category }) {
    const [article, setArticle] = useState([]);
    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=b28366cdb2774506ac92f0542c523a2a`;
        fetch(url).then(response => response.json()).then(data => setArticle(data.articles));

    }, [category])



    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {article.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })}
        </div>
    )
}

export default NewsBoard