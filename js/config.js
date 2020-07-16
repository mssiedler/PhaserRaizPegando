var game;

window.onload = function()
{
    let gameConfig = 
    {
        scale:{
            width:800,
            height:600,
            autoCenter:Phaser.Scale.CENTER_BOTH
        },
        physics:{
            default:'arcade',
            arcade: {
                gravity: {y: 300},
            }
        },
        backgroundColor: '#9FFB98',
        scene:[PlayGame]
    };
    game = new Phaser.Game(gameConfig);

    window.focus();
}
