import image from '../assets/image.png'
function NewsItem({ title, description, src, url }) {
    return (
        <div className="card bg-dark text-light mb- d-inline-block mx-5 my-3 px-2 py-2" style={{ width: "350px" }}>
            <img src={src ? src : image} style={{ height: "200px", width: "100%", objectFit: "cover" }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 50)}</h5>
                <p className="card-text">{description ? description.slice(0, 100) :
                    "Unlock the world's stories, where each headline is a gateway to discovery, and every article unveils a new chapter."}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default NewsItem