export default function Profile ({imgLink, name, bio}) {
    return (
        <div>
            <img src={`../src/assets/${imgLink}`} alt={`Picture of ${name}`}/>
            <h3>@{name}</h3>
            <p>{bio}</p>
        </div>
        
    )
}