// import React, { Component } from 'react';

// // import TextField from 'components/base/TextField';
// import {Wrap} from './index.styles'
// const WAIT_INTERVAL = 1000;
// const ENTER_KEY = 13;

// export default class TextSearch extends Component {
//     constructor(props) {
//         super();

//         this.state = {
//             value: props.value
//         };
//         let timer = null;
//     }

//     componentWillMount() {
//         let timer = null;
//     }

//     handleChange(value) {
//         clearTimeout(this.timer);

//         this.setState({ value });

//         this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
//     }

//     handleKeyDown(e) {
//         if (e.keyCode === ENTER_KEY) {
//             this.triggerChange();
//         }
//     }

//     triggerChange() {
//         const { value } = this.state;

//         this.props.onChange(value);
//     }

//     render() {
//         const { className } = this.props;

//         return (
//             <Wrap>
//                 <input 
//                 className={className}
//                 placeholder='Search'
//                 value={this.state.value}
//                 onChange={this.handleChange}
//                 onKeyDown={this.handleKeyDown}
                
//                 >
//                 </input>
//             </Wrap>

//         );
//     }
// }
// import React, { Component } from 'react';

// class BodyData extends Component {

// state = {
//     query: '',
//     data: [],
//     searchString:[]
// }

// handleInputChange = (event) => {
//     this.setState({
//         query: event.target.value
//     },()=>{
//     this.filterArray();
// })

// }
// }

// }

// getData = () => {
//     fetch(`http://localhost:4000/restaurants`)
//     .then(response => response.json())
//     .then(responseData => {
//         // console.log(responseData)
//         this.setState({
//             data:responseData,
//             searchString:responseData
//         })
//     })
// }

// filterArray = () => {
//     let searchString = this.state.query;
//     let responseData = this.state.data;



//     if(searchString.length > 0){
//         // console.log(responseData[i].name);
//         responseData = responseData.filter(searchString);
// this.setState({
//     responseData
// })
//     }

// }

// componentWillMount = () => {
//     this.getData();
// }
// render () {
//     return (
//         <div className="searchForm">
//             <form>
//                 <input type="text" id="filter" placeholder="Search for..."  onChange={this.handleInputChange}/>
//             </form>
//             <div>
//                 {
//                     this.state.responseData.map((i) =>
//                         <p>{i.name}</p>
//                     )
//                 }
//             </div>
//         </div>
//     )

// }


// export default BodyData;