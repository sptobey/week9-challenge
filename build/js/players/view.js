var PlayerView = React.createClass({

    getInitialState: function() {
        return {player: null}
    },

    render: function() {
        
        if (this.state.player){
            return ( 
                <div className="playerView" >
                    <h3 className="playerName">
                        <b>{this.state.player.username}</b>
                    </h3>
                    <h4 className="playerURL">
                        <b>{"Lichess URL: "}</b>
                        <a href={this.state.player.url}>{this.state.player.url}</a>
                    </h4>
                </div>
            )

        }else{
            return (
                <h4>Click an item to see details</h4>
            )
        }
  }

})
