class Perso extends ElementHtml{
    constructor($html) {
        super($html);
        this.$bulle=$html.find(".bulle");
        this.mots=[
            "Pouf il fait chaud"
            ,"Hâte d'être au dessus de ces débiles"
            ,"J'ai tep dans la combi ça pique les yeux"
            ,"..."
            ,"t'as remplis quoi dans sex-size dans le formulaire ?"
            ,"les planètes sont graves moches en tout cas"
            ,"En plus la balle elle est carrée mdr"
            ,"Mec tema il a pas changé la "
            ,"un grand pas ..."
        ];
    }
    parle(blabla){
        let ici=this;
        this.$bulle.text(blabla);
        setTimeout(function(){
            ici.$bulle.text("");
        },1500);
    }

    /**
     * Renvoie un mot aléatoire
     * @returns {string}
     */
    get motAleatoire(){
        return this.mots[Math.floor(Math.random() * this.mots.length)];
    }

}