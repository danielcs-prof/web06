
interface CardProps {
    title?: string;
    content?: string;
}
export const Card = (
    {title, content}: CardProps
) => {
    return(
        <>
        <div className="card showcase-card mb-3">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
            </div>
        </div>
        </>
    )
}