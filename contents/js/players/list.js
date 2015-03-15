var PlayersList = React.createClass({displayName: 'PlayersList',

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        $.ajax({
            // url gives 100 users
            url: 'http://en.lichess.org/api/user?nb=100',
            dataType: 'jsonp',
            jsonp: 'callback',
            success: function(data) {
                console.log('player list data: ', data)
                this.setState({
                    data: data.list
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    handleListItemClicked: function(username) {
        
        var player = _.find(this.state.data, {username: username})
        this.refs.playerView.setState({player:player})
        
        // I would really prefer to use this code for more information
        //  about the player, but "this.refs.playerView" is causing 
        //  problems...
        /*
        $.ajax({
            url: 'http://en.lichess.org/api/user/' + username,
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

        var players = this.state.data.map(function(player) {
            return (
                <PlayerListItem player={player} onListItemClicked={self.handleListItemClicked}/>
                )
        })

        return (
            <div className="playersPage">
                <div className="playersList six columns">
                    <div className="six columns">
                        <h4> 
                            <b>Player Name</b>
                        </h4>
                    </div>
                    {players}
                </div>
                <div className="playerView six columns">
                    <PlayerView ref="playerView"/>
                </div>
            </div>
        )
    }
})
