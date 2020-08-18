import "./styles.css";



class Pizza {
  constructor(masa, tamaño, ingredientes) {
    this.masa = masa;
    this.tamaño = tamaño;
    this.ingredientes = ingredientes;
  }

  preparar() {
    console.log(
      `Preparando pizza ${this.tamaño}, ${this.masa}, Ingredientes: ${this.ingredientes}`
    );
    return this;
  }

  hornear() {
    console.log("La pizza se está horneando");
    console.log("La pizza ya salió del horno");
    return this;
  }

  empacar() {
    console.log("Empacando la pizza...");
    console.log("La pizza se está enviando");
    return this;
  }
}

class Combo extends Pizza {
  constructor(masa, tamaño, ingredientes, combo, bebida, postre, cantidad) {
    super(masa, tamaño, ingredientes);
    this.combo = combo;
    this.bebida = bebida;
    this.postre = postre;
    this.cantidad = cantidad;
  }

  elegirCombo() {
    this.preparar();
    this.hornear();
    this.empacar();

    console.log(
      `Pedido: \nCombo: ${this.combo}\nCantidad: ${this.cantidad}\nPizza: ${this.tamaño}, ${this.masa}, Ingredientes: ${this.ingredientes} \nBebida: ${this.bebida}\nPostre: ${this.postre}`
    );
    return this;
  }
}

const Combo1 = new Combo(
  "Masa delgada",
  "Familiar",
  ["Queso", "Butifarra"],
  1,
  "Agua",
  "Helado",
  2
);
console.log(Combo1.elegirCombo());



//---------------------------------------------------------------------------------------------
class Bicicleta {
  constructor(tamaño, color, sillin, llantas, manillar) {
    this.tamaño = tamaño;
    this.color = color;
    this.sillin = sillin;
    this.llantas = llantas;
    this.manillar = manillar;
  }

contruir(){
console.log(
`Construllendo Bicicleta \nTamaño: ${this.tamaño} \nColor: ${this.color} \nSillin: ${this.sillin} \nLlantas: ${this.llantas} \nManillar: ${this.manillar} \nStikers: ${this.stiker}`
);
return this;
}
informacion(){
console.log("La bicicleta se esta armando")
}
envio(){
  console.log("La bisicleta se esta eviado...")
}
}
class Comprar extends Bicicleta{
  constructor(tamaño, color, sillin, llantas, manillar, stiker) {
  super(tamaño, color, sillin, llantas, manillar);
  this.stiker = stiker;
  }
ComprarBicicleta(){
this.contruir();
this.informacion();
this.envio();
}
}
const comprar1 = new Comprar(
  "grande",
  "negro",
  "mediano",
  "gruesas",
  "grande",
  ["BCM", "SCOT", "MOSNTER"]
  );
console.log (comprar1.ComprarBicicleta());