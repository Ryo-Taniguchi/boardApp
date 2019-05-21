import React from 'react';
import Form from './Form.js';
import Todo from './Todo.js';

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            input: ""
        };
    }
    handleChange = e => {
        console.log(e.currentTarget.value)
    }
    render() {
        return (
            <div>
                <Form />
                <label >
                    <input 
                        type="checkbox" 
                        value={this.state.input} 
                        onChange={this.handleChange} 
                    />
                    全て完了にする
                </label>

                <select>
                    <option>全て</option>
                    <option>未完成</option>
                    <option>完了済み</option>
                </select>

                <ul>
                    <li>
                        <Todo id={0} text="ヤッホ" />
                    </li>
                    <li>
                        <Todo id={0} text="ハロ" />
                    </li>
                    <li>
                        <Todo id={0} text="haha" />
                    </li>
                </ul>
            </div>
        )
    }
}

// 関数型functionalcomponent
// const App = () => <div>App</div>

export default App;