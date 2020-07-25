class PlayGame extends Phaser.Scene
{
    constructor()
    {
        super("PlayGame");
        this.personagem;
        this.passos; //de quanto em quanto eu quero andar
        this.premios;
        this.inimigos;

        this.txtPontos;
        this.txtVidas;

        this.pontos;
        this.vidas;


        this.estrela;

        
    }

    preload()
    {
       
        this.load.image("star", "assets/star.png");
        this.load.image("rock", "assets/rocha.png");
        this.load.spritesheet("personagem", "assets/dude.png", {frameWidth:32, frameHeight:48})
    }

    create()
    {
        var chao = this.add.rectangle(0,500,800,30,0xFF8C00).setOrigin(0,0);
        this.physics.add.existing(chao);

        this.physics.world.on("worldbounds", this.saiudaCena);

        chao.body.allowGravity = false;
        chao.body.setImmovable(true);

         this.premios = this.physics.add.group({
            key:'star',
            repeat:11,
            collideWorldBounds:true,
            setXY:{x:20, y:0, stepX:60} 
            
        });

        this.premios.children.iterate(this.configuracaoFilho);
       
        this.inimigos = this.physics.add.group({
            key:'rock',
            repeat:4,
            collideWorldBounds:true,
            setXY:{x:50, y:-100, stepX:130}
            
        });

        this.inimigos.children.iterate(this.configuracaoFilho);

        this.personagem = this.physics.add.image(320,470,'personagem',4);

        this.input.keyboard.on("keydown_LEFT", ()=> this.teclado('ESQUERDA'));
        this.input.keyboard.on("keydown_RIGHT", ()=> this.teclado('DIREITA'));
        this.input.keyboard.on("keydown_DOWN", ()=> this.teclado('BAIXO'));
        this.input.keyboard.on("keydown_SPACE", ()=> this.teclado('ESPACO'));

        this.physics.add.collider(this.personagem, chao);
        this.physics.add.overlap(this.personagem, this.premios, this.pegou, null, this);
        this.physics.add.overlap(this.personagem, this.inimigos, this.pegou, null, this);
        
        this.passos = 100;

        //Pontos e Vidas 
        this.add.text(30,chao.y+60, "Pontos:", {fontSize:'16px', fill:'red'});
        this.add.text(630, chao.y+60, "Vidas:", {fontSize:'16px', fill:'blue'})

        this.pontos = 0;
        this.txtPontos = this.add.text(100,chao.y+60, this.pontos, {fontSize:'16px', fill:'blue'});

        this.vidas = 2;
        this.txtVidas = this.add.text(690, chao.y+60, this.vidas, {fontSize:'16px', fill:'red'})
    }

    teclado(tecla)
    {
        switch (tecla) {
            case 'ESQUERDA':
                this.personagem.setVelocityX(this.passos*-1);
                break;
            case 'DIREITA':
                this.personagem.setVelocityX(this.passos);
                break;
            case 'BAIXO':
                this.personagem.setVelocityX(0);
                break;
            case 'ESPACO':
                if(this.pontos==10 || this.vidas==0){
                this.scene.restart();
                }
                break;
        
            default:
                break;
        }
    }

    update()
    {
        
    }

    pegou(personagem, item)
    {
        item.disableBody(true,true);
        switch (item.texture.key) {
            case "star":
                this.pontos++;
                this.txtPontos.text = this.pontos;
                if(this.pontos==10)
                {
                    this.add.text(200,150, "Parabéns você venceu\nTecle ESPAÇO para jogar novamente",
                    {fontSize:'22px', fill:'orange', backgroundColor:'black'});
                    personagem.disableBody(true,true);

                }
                break;
            case "rock":
                this.vidas--;
                this.txtVidas.text = this.vidas;
                if(this.vidas==0)
                {
                    this.add.text(200,150, "Você Perdeu\nTecle ESPAÇO para tentar novamente",
                    {fontSize:'22px', fill:'orange', backgroundColor:'black'});
                    personagem.disableBody(true,true);

                }
                break;
            
            default:
                break;
        }
        
    }

    configuracaoFilho(elemento){
        elemento.body.onWorldBounds = true;
        elemento.x = Phaser.Math.Between(0,800);
        elemento.y = Phaser.Math.Between(0,70);
    }

    saiudaCena(elemento){
        elemento.x = Phaser.Math.Between(0,800);
        elemento.y = Phaser.Math.Between(0,70);
        
    }

   
}