$( "#players" ).on( "click", function( event ) {
    React.render(
        // url gives 100 users
        <PlayersList url='http://en.lichess.org/api/user?nb=100'/>,
        document.getElementById('content')
    )
})

$( "#games" ).on( "click", function( event ) {
    React.render(
        // url gives up to 100 ranked games including the opening and moves
        <GamesList url='http://en.lichess.org/api/game?rated=1&nb=100&with_opening=1&with_moves=1&with_analysis=1&analysed=1'/>,
        document.getElementById('content')
    )
})
