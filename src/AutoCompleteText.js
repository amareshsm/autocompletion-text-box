import React from 'react';
import './AutoCompleteText.css';

export default class  AutoCompleteText extends React.Component{
    constructor(props){
        super(props);
        this.items=['Telegram','Tesla','Thoshiba','facebook','google','chargebee','Twillio',
        'slack','freshworks','zoho','tcs','cts','Tech Mahindra','tvs','torrent'];  
        this.state={suggestions:[],inputText:''}
}

onChange(e){
    const value=e.target.value;
    let suggestions=[];
    if (value.length >0 ){
        const regex= new RegExp(`^${value}`,'i');
        suggestions=this.items.sort().filter(v => regex.test(v))
    }
    this.setState(()=>({suggestions,inputText:value}));
}

suggestionSelected(value){
    this.setState(()=>({
       inputText:value,
       suggestions:[]
    }))
}

renderSuggestions(){
    const {suggestions}=this.state;
    if(suggestions.length===0){
        return null;
    }
    return (<ul> {suggestions.map((item)=> <li key={item} onClick={()=>this.suggestionSelected(item)}>{item}</li>)}</ul>)
}


render(){
    return (<div  className="AutoCompleteText">
    <input onChange={(e)=>this.onChange(e)} type="text"  value={this.state.inputText} placeholder="search here"/>
      {this.renderSuggestions()}
    </div>)
}

}