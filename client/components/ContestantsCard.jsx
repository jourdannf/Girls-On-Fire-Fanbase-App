export default function ContestantsCard ({contestant}) {
    return (
        <div>
            <img src={contestant.img} alt={`Picture of ${contestant.name}`} />
            <p>{contestant.name}</p>
        </div>
    );
}