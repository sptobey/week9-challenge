var GameView = React.createClass({

    getInitialState: function() {
        return {game: null}
    },

    render: function() {
        
        if (this.state.game){
            
            var game = this.state.game;
            var outcome =   (game.winner == "white") ? "(1-0)" :
                            (game.winner == "black") ? "(0-1)" :
                            "(1/2-1/2)";
            var white = game.players.white.userId + " (" + game.players.white.rating + ")";
            var black = game.players.black.userId + " (" + game.players.black.rating + ")";
            var opening = "(" + game.opening.code + ") " + game.opening.name;
            var moves = game.moves;
            var turns = game.turns;
            
            return ( 
                <div className="gameView" >
                    <h5 className="gameWhite">
                        <b>White: </b> {white}
                    </h5>
                    <h5 className="gameBlack">
                        <b>Black: </b> {black}
                    </h5>
                    <h5 className="gameOutcome">
                        <b>Outcome: </b> {outcome}
                    </h5>
                    <h5 className="gameOpening">
                        <b>Opening: </b> {opening}
                    </h5>
                    <h5 className="gameMoves">
                        <b> {"Moves (" + turns + "): "} </b> {moves}
                    </h5>
                    <h5 className="gameURL">
                        <b> {"View Game: "} </b>
                        <a href={this.state.game.url}>{this.state.game.url}</a>
                    </h5>
                </div>
            )

        }else{
            return (
                <h4>Click an item to see details</h4>
            )
        }
  }

})
