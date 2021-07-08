class OrangeTree {
    constructor(age, height, oranges = []) {
        // ваш код
        this.age = age;
        this.height = height;
        this.oranges = oranges;
    }

    passGrowingSeason() {
        // прокомментируйте все строчки внутри этого if
        if(this.isMature()) {
            if(this.hasOranges()){
                this.oranges = [];
            }
            let random = Math.floor(Math.random() * (300 - 100) + 100);
            for(let i = 0; i <= random; i++) {
                this.oranges.push(new Orange());
            }
        }
        // допишите недостающий код
        this.age ++
        if(this.height < 25) {
            this.height += 2.5
        }

        return this.oranges
    }

    averageOrangeDiameter() {
        // вычислить средний уражай апельсинов
    let averageDiameter = 0;
    for(let i = 0; i < this.oranges.length; i++) {
      averageDiameter += this.oranges[i].diameter;
    }    
    averageDiameter = averageDiameter / this.oranges.length;    
    return averageDiameter
  }


    isMature(){
        // вычислить зрелое ли дерево
        if(this.age > 6){
            return true 
        }
            return false

    };

    isDead() {
        // мертво ли дерево
        if(this.age >= 100) {
        return true
     }
        return false
    };


    hasOranges(){
        // есть ли апельсины на дереве
        if(this.oranges < 1) {
            return false
        }
            return true
        };

    pickAnOrange() {
        // если есть апельсины взять и вернуть один, иначе вывести сообщение об ошибке
        if(this.hasOranges()){
            return this.oranges.shift()
            }
            return 'This tree has no oranges'
        }
        }
    


