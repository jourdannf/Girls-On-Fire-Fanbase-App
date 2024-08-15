import "../src/App.css"

export default function ContestantsCard ({contestant}) {
    function handleClick(e) {
        //Get the parent
        //Find the contestant
        //Add contestant to favorites
        //Update state for like
    }
    
    return (
        <div className="contestant-card-outer">
            <img className="contestant-card-img" src={contestant.img ? `../src/assets/${contestant.img}` : ""} alt={`Picture of ${contestant.name}`} />
            <button className="like-button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill " viewBox="0 0 16 16" onClick={handleClick}>
  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg></button>
            <p>{contestant.name}</p>
        </div>
    );
}