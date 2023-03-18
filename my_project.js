var card=1 ;
class projectbox{
    constructor(title,infotext ,imgSrc, buttonlink){
        this.card = card ;
        this.imgSrc = imgSrc;
        this.title = title;
        this.infotext=infotext;
        this.buttonlink =buttonlink;
    }
    create(){
        let container = document.getElementsByClassName("card_container")[0];
        container.innerHTML +=`</div><div class="card card${this.card}">
          <div class="foto foto${this.card}">
            <img src="${this.imgSrc}" alt="Project${this.card}" class="img_class" />
          </div>
          <div class="title_info_wrapper">
            <div class="title title${this.card}"><h2>${this.title}</h2></div>
            <div class="info info${this.card}">
              <p>
                  ${this.infotext}
              </p>
            </div>

            <div class="button button${this.card}"><a href="${this.buttonlink}">Go to Project</a></div>
          </div>
        </div>`
        card+=1;
        
    }
}