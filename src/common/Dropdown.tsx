


// export const Dropdown = ({ options, selected, onSelectedChange, label }) => {
//     const renderedOptions = options.map((option) => {
//         return (
//             <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
//                 {option.label}
//             </div>
//         );
//     });

//     return (
//         <div className="ui form">
//             <div className="field">
//                 <label className="label">{label}</label>
//                 <div className="visible ui selection dropdown active">
//                     <i className="dropdown icon"></i>
//                     <div className="text">{selected.label}</div>
//                     <div className="visible transition menu">{renderedOptions}</div>
//                 </div>
//             </div>
//         </div>
//     );
// }