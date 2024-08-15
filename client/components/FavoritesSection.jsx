import ContestantCard from "./ContestantsCard"

export default function FavoritesSection ({contestants}) {
    if (contestants.length == 0){
        // console.log(contestants)
        
        return;
    }

    return (
        <div>
            <h3>Favorite Contestants</h3>
            {
                
                contestants.map(contestant => {
                    return <ContestantCard contestant={contestant} />
                })
            }
        </div>
    );
}