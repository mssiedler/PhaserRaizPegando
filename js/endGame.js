class EndGame extends Phaser.Scene
{

    constructor()
    {
        super("EndGame");
        this.mensagem;
    }

  

    create()
    {
        
        game.scene.keys["PlayGame"].fase=1;

        this.add.image(0,0,"fundo").setOrigin(0,0);
        this.add.text(150,50,this.mensagem, {fontSize:'32px', fill:'purple'});
        let btnPlay = this.add.image(135,100,"btnPlay").setOrigin(0,0);
        btnPlay.setInteractive();

        let btnHome = this.add.image(135,300,"btnVoltar").setOrigin(0,0);
        btnHome.setInteractive();
        this.add.image(320,230,"dudecapa").setOrigin(0,0);
        

        //Adicionar o clique do botao
        btnPlay.on("pointerdown", () => this.scene.start("PlayGame"));
        btnHome.on("pointerdown", () => this.scene.start("HomeGame"));
    }
}