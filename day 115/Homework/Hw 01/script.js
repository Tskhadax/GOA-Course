//  Level 115 :
/* 1) შექმენით Shape მშობელი კლასი, რომელსაც ექნება: 
--- თვისებები --- 
სოგრძე: Number, 
სიგანე: Number, 
ფერი: String 
და კოორდინატები(სიის/მასივის სახით[x;y]): Array
--- მეთოდები --- 
სიგრძის შეცვლა(გაზრდა/შემცირება), 
სიგანის შეცვლა(გაზრდა/შემცირება), 
ფერის შეცვლა,
კოორდინატების შევლა,
ფიგურის დახატვა - მეთოდი, რომელიც კონსოლზე დაბეჭდავს: 
'კოორდინატებზე - ${კოორდინატები} იხატება ფიგურა, რომლის ზომებია ${სიგრძე}/${სიგანე}, რომლის ფერია &{ფერი}. */

class Shape {
    constructor(height, width, color, cordinant){
        this.Height = height,
        this.Width  = width,
        this.Color  = color,
        this.Cordinant = cordinant
    }

    changeHeight(amount) {
        this.Height += amount
    }

    changeWidth(amount) {
        this.Width += amount
    }

    changeColor(color) {
        this.Color = color
    }

    changeCordinant(newCordinant) {
        this.Cordinant = newCordinant
    }

    draw() {
        console.log(`კოორდინატებზე - ${this.Cordinant} იხატება ფიგურა, რომლის ზომებია ${this.Height}/${this.Width}, რომლის ფერია ${this.Color}.`)
    }
}
/* --- --- --- --- --- ---
შექმნეთი შვილეული კლასები - მაგ(Cirle, Rectangle, Triangle და ა.შ.), რომლებიც მემკვიდრეობით მიიღებენ Shape კლასის თვისებებსა და მეთოდებს.
--- --- --- --- --- ---
შეუცვალეთ თითოეულ შვილეულ კლასს ფიგურის დახატვის მეთოდი, მაგ. Triangle კლასის შემთქვევაში, ფიგურის დახატვის მეთოდი კონსოლზე დაბეჭდავს:
'კოორდინატებზე - ${კოორდინატები} იხატება სამკუთხედი, რომლის ზომებია ${სიგრძე}/${სიგანე}, რომლის ფერია &{ფერი}.*/


class Circle extends Shape {
    constructor(height, width, color, cordinant) {
        super(height, width, color, cordinant)
    }

    draw() {
        console.log(`კოორდინატებზე - ${this.Cordinant} იხატება წრე, რომლის ზომებია ${this.Height}/${this.Width}, რომლის ფერია ${this.Color}.`)
    }
}

const circle1 = new Circle(200, 100, 'navy blue', [100, 100])
circle1.draw()
console.log(circle1)
