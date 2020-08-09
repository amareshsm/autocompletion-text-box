import React from 'react';
import './AutoCompleteText.css';
 import parse from 'html-react-parser';


export default class  AutoCompleteText extends React.Component{
    constructor(props){
        super(props);
        this.items=['Telegram','Tesla','Thoshiba','facebook','amazon','amazon console','google','chargebee','Twillio',
        'slack','freshworks','zoho','tcs','cts','Tech Mahindra','tvs','torrent','amazon sales'];  
        this.state={suggestions:[],inputText:''}
}

onChange(e){
    const value=e.target.value;
    let suggestions=[];
    if (value.trim().length > 0 ){
        const regex= new RegExp(`^${value.trim()}`,'i');
        suggestions=this.items.sort().filter(v => regex.test(v))
        suggestions.map((val,index)=>{
            let endIndex=value.length;
            suggestions[index]=`<span class='highlight'>${value}</span>`+val.slice(endIndex)
        })
    }
    this.setState(()=>({suggestions,inputText:value}));
}

suggestionSelected(value){
    let val=value.replace(`<span class='highlight'>`,'').replace(`</span>`,'')
    this.setState(()=>({
       inputText:val,
       suggestions:[]
    }))
}

renderSuggestions(){
    const {suggestions}=this.state;
    if(suggestions.length===0){
        return null;
    }
    return (<ul> {suggestions.map((item)=> <li key={item} onClick={()=>this.suggestionSelected(item)}>{parse(item)}</li>)}</ul>)
}


render(){
    return (<div  className="AutoCompleteText">
    <input onChange={(e)=>this.onChange(e)} type="text"  value={this.state.inputText} placeholder="search here"/>
      {this.renderSuggestions()}
    </div>)
}

}