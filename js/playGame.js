class PlayGame extends Phaser.Scene
{
    constructor()
    {
        super("PlayGame");
        this.personagem;
        this.passos; //de quanto em quanto eu quero andar
        this.premios;
        this.inimigos;
    }

    preload()
    {
        console.log("PRELOAD");
        this.load.image("star", "assets/star.png");
        this.load.image("rock", "assets/rocha.png");
        this.load.spritesheet("personagem", "assets/dude.png", {frameWidth:32, frameHeight:48})
    }

    create()
    {
        var chao = this.add.rectangle(0,500,800,30,0xFF8C00).setOrigin(0,0);
        this.physics.add.existing(chao);
        chao.body.allowGravity = false;
        chao.body.setImmovable(true);


        this.premios = this.physics.add.group({
            key:'star',
            
        });
        
        var rocha = this.physics.add.image(230,100,'rock');
        this.personagem = this.physics.add.image(320,470,'personagem',4);

        this.input.keyboard.on("keydown_LEFT", ()=> this.teclado('ESQUERDA'));
        this.input.keyboard.on("keydown_RIGHT", ()=> this.teclado('DIREITA'));
        this.input.keyboard.on("keydown_DOWN", ()=> this.teclado('BAIXO'));

        this.physics.add.collider(this.personagem, chao);
        this.physics.add.collider(this.personagem, this.premios, this.pegou, null, this);
        this.physics.add.collider(this.personagem, rocha, this.pegou, null, this);
        
        this.passos = 70;
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
        
            default:
                break;
        }
    }

    update()
    {
        
    }

    pegou(personagem, item)
    {
        switch (item.texture.key) {
            case "star":
                console.log("Pegou a estrela");
                break;
            case "rock":
                console.log("Pegou a rocha");
                break;
            
            default:
                break;
        }
        
    }


}