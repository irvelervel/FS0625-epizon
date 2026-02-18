// il reducer è un componente fondamentale della logica di Redux
// è un "robottino" che, dato lo stato corrente dell'applicativo e l'ultima azione appena
// "dispatchata", sarà in grado di costruire il NUOVO stato dell'applicativo

// un reducer è una FUNZIONE PURA ("pure function"):
// - dato lo stesso input, restituirà sempre lo stesso output
// - non muta mai i proprio parametri
// - non effettua mai "side-effects" (es. chiamate API)

// una ACTION è un oggetto JS con almeno una proprietà di nome "type" (può anche avere un "payload")
// serve a DESCRIVERE la modifica che si vuole apportare nello stato

// la "prima biglia" solitamente la si assegna manualmente (come nel caso dello stato di un component)
const initialState = {
  // solitamente lo stato di un Redux Store è sempre organizzato in "slices"
  // per questo motivo lo si divide in sotto-oggetti
  cart: {
    // cart si definisce "slice", "fetta" del Redux Store
    content: [], // qui salveremo i libri da mettere nel carrello
  },
}

const mainReducer = (currentState = initialState, action) => {
  // è sulla base dell'action.type che il reducer sceglie COME costruire il nuovo stato
  switch (action.type) {
    // case pizza
    // case carrello

    default:
      // se entro nel caso "default" vuol dire che non so come comportarmi
      // quindi, per non fare danni, ritorno lo stato attuale come l'ho trovato!
      return currentState
  }
}

export default mainReducer
