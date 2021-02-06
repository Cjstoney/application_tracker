import "./footer.css"

function Footer():JSX.Element{

    const fullDate = new Date()


return (
    <div>
        <p>Created by <a href="https://github.com/cjstoney" target="_blank">Camerone Stoney</a> and <a href="https://github.com/rbompiani" target="_blank"> Rebecca Bompiani</a></p>
        <p>© {fullDate.getFullYear()} </p>
    </div>
)
}

export default Footer