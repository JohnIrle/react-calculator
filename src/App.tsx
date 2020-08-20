import React, { useState } from "react";
import "./App.css";

function App() {
    const [eq, setEq] = useState<string[]>([]);

    return (
        <div className="vc wrapper">
            <div className="calculator">
                <div id="display" className="border">
                    <p className="result">{eq}</p>
                </div>
                <div id="clear" className="vc border">
                    C
                </div>
                <div
                    id="multiply"
                    className="vc oper border"
                    onClick={() => setEq([...eq, "x"])}
                >
                    x
                </div>
                <div
                    id="divide"
                    className="vc oper border"
                    onClick={() => setEq([...eq, "÷"])}
                >
                    ÷
                </div>
                <div
                    id="one"
                    className="num vc border"
                    onClick={() => setEq([...eq, "1"])}
                >
                    1
                </div>
                <div
                    id="two"
                    className="num vc border"
                    onClick={() => setEq([...eq, "2"])}
                >
                    2
                </div>
                <div
                    id="three"
                    className="num vc border"
                    onClick={() => setEq([...eq, "3"])}
                >
                    3
                </div>
                <div
                    id="subtract"
                    className="vc oper border"
                    onClick={() => setEq([...eq, "—"])}
                >
                    —
                </div>
                <div
                    id="four"
                    className="num vc border"
                    onClick={() => setEq([...eq, "4"])}
                >
                    4
                </div>
                <div
                    id="five"
                    className="num vc border"
                    onClick={() => setEq([...eq, "5"])}
                >
                    5
                </div>
                <div
                    id="six"
                    className="num vc border"
                    onClick={() => setEq([...eq, "6"])}
                >
                    6
                </div>
                <div
                    id="add"
                    className="vc oper border"
                    onClick={() => setEq([...eq, "+"])}
                >
                    +
                </div>
                <div
                    id="seven"
                    className="num vc border"
                    onClick={() => setEq([...eq, "7"])}
                >
                    7
                </div>
                <div
                    id="eight"
                    className="num vc border"
                    onClick={() => setEq([...eq, "8"])}
                >
                    8
                </div>
                <div
                    id="nine"
                    className="num vc border"
                    onClick={() => setEq([...eq, "9"])}
                >
                    9
                </div>
                <div id="equals" className="vc border">
                    =
                </div>
                <div
                    id="zero"
                    className="num vc border"
                    onClick={() => setEq([...eq, "0"])}
                >
                    0
                </div>
                <div
                    id="decimal"
                    className="vc oper border"
                    onClick={() => {
                        if (eq[eq.length - 1] !== ".") {
                            setEq([...eq, "."]);
                        }
                    }}
                >
                    .
                </div>
            </div>
        </div>
    );
}

export default App;
