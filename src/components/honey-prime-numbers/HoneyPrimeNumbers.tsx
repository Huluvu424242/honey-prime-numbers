import {Component, Element, h, State} from "@stencil/core";

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

  @State() prims: number[] = [1];

  public connectedCallback() {
    this.ident = this.hostElement.id ? this.hostElement.id : Math.random().toString(36).substring(7);
  }


  protected addPrimeNumber(primeNum: number) {
    this.prims = [primeNum, ...this.prims]
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
