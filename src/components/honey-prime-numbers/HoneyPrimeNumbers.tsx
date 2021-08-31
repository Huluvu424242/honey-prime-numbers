import {Component, Element, h, Prop, State} from "@stencil/core";
import {generatePrims} from "../../prime.worker";

@Component({
  tag: "honey-prime-numbers",
  styleUrl: "HoneyPrimeNumbers.css",
  assetsDirs: ['assets'],
  shadow: true
})
export class HoneyPrimeNumbers {

  /**
   * Host Element
   */
  @Element() hostElement: HTMLElement;

  /**
   * Id des Host Elements, falls nicht verfügbar wird diese generiert
   */
  ident: string;

  @State() prims: number[]=[];

  /**
   *  Höchste Zahl bis zu der die Primzahlen ermittelt werden.
   *  Für den Wert -1 werden unendlich lang die Primzahlen ermittelt.
   *  Auf Grund des trivialen Algorithmus sollte -1 nie verwendet werden.
   *  Anderenfalls kommt es zu Speicherüberläufen und Einfrieren des Browsers/Rechners.
   *
   *  ATTENTION: Don't use the value -1 it is only  for damage tests.
   */
  @Prop() ende: number;

  public connectedCallback() {
    this.ident = this.hostElement.id ? this.hostElement.id : Math.random().toString(36).substring(7);
    generatePrims(this.ende, (primeNum) => {
      console.log('### neue Primzahl:' + primeNum);
      this.prims.unshift(primeNum)
      this.prims = [...this.prims];
    });
  }



  public render() {

    return (
      <ul>
        {this.prims.map((prime) =>
          <li>{prime}</li>
        )}
      </ul>
    );
  }
}
