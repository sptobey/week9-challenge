var GameListItem = React.createClass({

    handleClick: function(event) {
        console.log('an game is clicked: ', this.props.game)
        this.props.onListItemClicked(this.props.game.id)
    },

    render: function() {
        
        var game = this.props.game
        var outcome =   (game.winner == "white") ? "(1-0)" :
                        (game.winner == "black") ? "(0-1)" :
                        "(1/2-1/2)";
        var white = game.players.white.userId + " (" + game.players.white.rating + ")";
        var black = game.players.black.userId + " (" + game.players.black.rating + ")";
        
        return (
            <div className="game">
                <table className="u-full-width">
                    <tbody>
                        <tr>
                            <td><h5>
                                <a href="#" onClick={this.handleClick}>
                                    {outcome + " -- " + white + " vs. " + black}
                                </a>
                            </h5></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
})
