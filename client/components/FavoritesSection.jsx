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
                    //Won't work because I couldn't get patch to work, using the string inside my database for presentation purposes right now
                    // return <ContestantCard contestant={contestant} />
                    return contestant;
                })
            }
        </div>
    );
}