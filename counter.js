const h1 = document.querySelector("h1");
const incButton = document.getElementById("increment");
const decButton = document.getElementById("decrement");
const reset = document.querySelector("#reset");
const double = document.querySelector("#double");

incButton.addEventListener("click", (e) => {
    store.dispatch({ type: "INCREMENT" });
    h1.innerText = store.getState().count;
});

decButton.addEventListener("click", (e) => {
    store.dispatch({ type: "DECREMENT" });
    h1.innerText = store.getState().count;
});

reset.addEventListener("click", (e) => {
    store.dispatch({ type: "RESET" });
    h1.innerText = store.getState().count;
});

double.addEventListener("click", (e) => {
    store.dispatch({ type: "MULTIPLY", payload: 2 });
    h1.innerText = store.getState().count;
});

// next exercise

const mood = document.querySelector("#mood");
const happy = document.querySelector("#happy");
const angry = document.querySelector("#angry");
const sad = document.querySelector("#sad");
const confused = document.querySelector("#confused");

happy.addEventListener("click", (e) => {
    store.dispatch({type: 'HAPPY'});
    mood.innerText = store.getState().mood;
});

angry.addEventListener("click", (e) => {
    store.dispatch({type: 'ANGRY'});
    mood.innerText = store.getState().mood;
});

sad.addEventListener("click", (e) => {
    store.dispatch({type: 'SAD'});
    mood.innerText = store.getState().mood;
});

confused.addEventListener("click", (e) => {
    store.dispatch({type: 'CONFUSED'});
    mood.innerText = store.getState().mood;
});