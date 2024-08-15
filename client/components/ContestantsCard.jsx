export default function ContestantsCard ({contestant}) {
    {console.log(contestant)}
    
    return (
        <div>
            <img src={contestant.img ? `../src/assets/${contestant.img}` : ""} alt={`Picture of ${contestant.name}`} />
            <p>{contestant.name}</p>
        </div>
    );
}