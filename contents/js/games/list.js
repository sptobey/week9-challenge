var GamesList = React.createClass({displayName: 'GamesList',

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        $.ajax({
            // url gives 100 users
            url: 'http://en.lichess.org/api/game?rated=1&nb=100&with_opening=1&with_moves=1&with_analysis=1&analysed=1',
            dataType: 'jsonp',
            jsonp: 'callback',
            success: function(data) {
                console.log('game list data: ', data)
                this.setState({
                    data: data.list
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(game_id) {
        
        var game = _.find(this.state.data, {id: game_id})
        this.refs.gameView.setState({game:game})
        
        // I would really prefer to use this code for more information
        //  about the game, but "this.refs.gameView" is causing 
        //  problems...
        /*
        $.ajax({
            url: 'http://en.lichess.org/api/game/' + game_id + '?with_analysis=1&with_moves=1&with_fen=1',
            dataType:' jsonp',
            jsonp: 'callback',
            success: function(player_data) {
                console.log('player data: ', JSON.stringify(player_data));
                this.refs.playerView.setState({player: player_data})
            }
        });
        */
    },


    render: function() {

        var self = this

        var games = this.state.data.map(function(game) {
            return (
                <GameListItem game={game} onListItemClicked={self.handleListItemClicked}/>
                )
        })

        return (
            <div className="gamesPage">
                <div className="gamesList six columns">
                    <div className="six columns">
                        <h4> 
                            <b>Game</b> {" (Rated)"}
                        </h4>
                    </div>
                    {games}
                </div>
                <div className="gameView six columns">
                    <GameView ref="gameView"/>
                </div>
            </div>
        )
    }
})
