import React from 'react'; 

function Countvisitor() {
    // <div id="CounterVisitor">
    //     <p>This page has</p>
    //     <h1 id = "count">0</h1>
    //     <p>Views</p>
    // </div>
    //method#1
    helper()

    // method2
    // const countEl = document.getElementById('CounterVisitor');
    // fetch('https://api.countapi.xyz/update/interactiveWeb/team1105/?amount=1')
    //     .then(res => res.json())
    //     .then(res => {
    //         countEl.innerHTML = res.value;
    //     })
    return (
        <div id="CounterVisitor">
            <p>This page has</p>
            <h1 id = "count">0</h1>
            <p>Views</p>
        </div>
    )
}

function helper() {
    var n = localStorage.getItem('on_load_counter');
    if (n === null) {
        n = 0
    }
    n++;
    localStorage.setItem("on_load_counter", n);
    document.getElementById('CounterVisitor').innerHTML = n;
}

export default Countvisitor