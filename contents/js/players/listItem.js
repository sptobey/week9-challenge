var PlayerListItem = React.createClass({

    handleClick: function(event) {
        console.log('an player is clicked: ', this.props.player)
        this.props.onListItemClicked(this.props.player.username)
    },

    render: function() {
        
        var player = this.props.player
        
        return (
            <div className="player">
                <table className="u-full-width">
                    <tbody>
                        <tr>
                            <td><h5><a href="#" onClick={this.handleClick}>{player.username}</a></h5></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
})
