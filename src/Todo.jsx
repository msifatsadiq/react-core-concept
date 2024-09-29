// export default function Todo({ task, isDone }) {
//     console.log(isDone);
//     return (
//         <li>
//             {task}
//         </li>
//     );
// };


// // Conditional Rendering Option -1
// export default function Todo({ task, isDone }) {
//     // console.log(isDone);

//     if (isDone === true) {
//         return <li>Finished : {task}</li>
//     } else {
//         return <li>
//             Work on: {task}
//         </li>
//     }
// };

// Conditional Rendering Option -2
// export default function Todo({ task, isDone }) {
//     if (isDone) {
//         return <li>Finished : {task}</li>
//     }
// };


// Conditional Rendering Option -3(ternary)
// export default function Todo({ task, isDone }) {
//     return <li> {isDone ? 'Finished' : 'Work on'} : {task}</li>
// };


// // Conditional Rendering Option -4
export default function Todo({ task, isDone }) {
    // console.log(isDone);

    return <li>{task} {isDone && ': Done'}</li>

}