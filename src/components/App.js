import React from 'react';
import Form from './Form.js';
import Todo from './Todo.js';

let currentId = 0;

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [
                
            ]
        };
    }
    handleChange = e => {
        console.log(e.currentTarget.value)
    }
    handleSubmit = text => {
        const newTodo = {
            id: currentId,
            text,
        }
        // 配列を1つ１つ取り出して(this.state.todos)newTodoに代入して最後にnewTodosに格納
        const newTodos = [...this.state.todos, newTodo]
        this.setState({ todos : newTodos})
        currentId++;
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}/>
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
                    {this.state.todos.map(({id, text}) => <li><Todo key={id} text={text}/></li>)}
                </ul>
            </div>
        )
    }
}

// 関数型functionalcomponent
// const App = () => <div>App</div>

export default App;