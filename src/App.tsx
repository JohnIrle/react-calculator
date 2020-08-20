import React from "react";
import "./App.css";

function App() {
    return (
        <div className="calculator">
            <div id="display"></div>
            <div id="one" className="num">
                1
            </div>
            <div id="two" className="num">
                2
            </div>
            <div id="three" className="num">
                3
            </div>
            <div id="four" className="num">
                4
            </div>
            <div id="five" className="num">
                5
            </div>
            <div id="six" className="num">
                6
            </div>
            <div id="seven" className="num">
                7
            </div>
            <div id="eight" className="num">
                8
            </div>
            <div id="nine" className="num">
                9
            </div>
            <div id="zero" className="num">
                0
            </div>
            <div id="equals">=</div>
            <div id="add">+</div>
            <div id="subtract">-</div>
            <div id="multiply">*</div>
            <div id="divide">/</div>
            <div id="decimal">.</div>
            <div id="clear">clear</div>
        </div>
    );
}

export default App;
