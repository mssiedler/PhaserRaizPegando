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
        if(this.mensagem === "Você Venceu!!!")
        {
           
            this.add.text(150,50,"Você venceu com o tempo de: " + game.scene.keys["PlayGame"].tempo, {fontSize:'22px', fill:'purple'});
            if(localStorage.getItem("recorde") < game.scene.keys["PlayGame"].tempo)
            {
                localStorage.setItem("recorde", game.scene.keys["PlayGame"].tempo);
                this.add.text(150,80,"Parabéns, você tem o novo recorde do jogo", {fontSize:'22px', fill:'purple'});
            }
        }
        else
        {
            this.add.text(150,50,this.mensagem, {fontSize:'22px', fill:'purple'});
        }

       
        let btnPlay = this.add.image(135,100,"btnPlay").setOrigin(0,0);
        btnPlay.setInteractive();

        let btnHome = this.add.image(135,300,"btnVoltar").setOrigin(0,0);
        btnHome.setInteractive();
        this.add.image(320,230,"dudecapa").setOrigin(0,0);

        game.scene.keys["PlayGame"].tempo=90;

        //Adicionar o clique do botao
        btnPlay.on("pointerdown", () => this.scene.start("PlayGame"));
        btnHome.on("pointerdown", () => this.scene.start("HomeGame"));
    }
}