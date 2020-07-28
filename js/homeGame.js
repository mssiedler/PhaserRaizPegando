class HomeGame extends Phaser.Scene
{

    constructor()
    {
        super("HomeGame");
    }

    preload()
    {
        this.load.image("btnPlay", "assets/jogar.png");
        this.load.image("fundo", "assets/fundo.png");
        this.load.image("dudecapa", "assets/dudecapa.png");

        //PlayGame
        this.load.image("star", "assets/star.png");
        this.load.image("chao", "assets/chao2.png");
        this.load.image("rock", "assets/rocha.png");
        this.load.spritesheet("personagem", "assets/dude.png", {frameWidth:32, frameHeight:48})

        this.load.audio("musica", "assets/music.mp3");
        this.load.audio("som", "assets/coin.mp3");
        
        //EndGame
        this.load.image("btnVoltar", "assets/voltar.png");
    }

    create()
    {
        this.add.image(0,0,"fundo").setOrigin(0,0);
        let btnPlay = this.add.image(135,200,"btnPlay").setOrigin(0,0);
        btnPlay.setInteractive();

        this.add.image(320,230,"dudecapa").setOrigin(0,0);
        

        //Adicionar o clique do botao
        btnPlay.on("pointerdown", () => this.scene.start("PlayGame"));
    }
}