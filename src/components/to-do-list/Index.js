import React, { Component } from 'react'
import '../to-do-list/Style.css';

export default class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:'',
            listText: []
        }
    }

    inputText = (e) =>{
        this.setState({
            text: e.target.value
        })
    }

    addList = () =>{
        const textSize = this.state.text

        if(textSize.length === 0){
            return;
        }

        const arrayList = this.state.listText
        arrayList.push(this.state.text)

        this.setState({
            listText: arrayList,
            text:''
        })
    }

    clickRemove = (n) => {
        const arrayList = this.state.listText
        if(arrayList.indexOf(n) > -1){
            arrayList.splice(arrayList.indexOf(n), 1)
        }

        this.setState({
            listText: arrayList
        })
    }

    render() {
        const textMap = this.state.listText.map((n, index) =>{
            return <li key={index} onDoubleClick={this.clickRemove.bind(this,n)}>{n}</li>
        })
        return (
            <div className='box'>
                <h1>To-Do-List</h1>
                <input className='input' onChange={this.inputText} value={this.state.text} placeholder='digite aqui'/> <br/><br/>
                
                <ul className='ul'>
                    {textMap}
                </ul>

                <br/>
                <button className='button' onClick={this.addList}>Adicionar</button> 
            </div>
        )
    }
}
