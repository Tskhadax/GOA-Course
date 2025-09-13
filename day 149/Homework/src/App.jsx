import Li from './Li.jsx'
import tasks from './All.json'

function App() {
  console.log(tasks)
  // let chosen = tasks
  // function modelChange(model) {

  //   if (model == 'All') {
  //     chosen = tasks
  //   } else if (model == 'Complate') {
  //     chosen = tasks.filter(item => item.complated)
  //   } else {
  //     chosen = tasks.filter(item => !item.complated)
  //   }

  // }

  // modelChange('All')


  return (
    // big div
    <div className="flex justify-center items-center h-screen bg-gray-300 flex-col font-[600] gap-2">

      {/* Task 002   -  input + submit button */}
      <div className="flex gap-2 flex-wrap items-center justify-center">
        <input type="text" placeholder='E n t e r  .  .  . ' className="border-solid border-2 border-gray-400 rounded outline-none pt-3 pb-3 pl-5 pr-5" required />
        <button className="bg-black text-white pl-5 pr-5 tracking-wider rounded cursor-pointer pt-3 pb-3">Submit</button>
      </div>

      {/* Task 003  -  message p*/}
      <p className="text-red-900">error message</p>

      {/* Task 004 */}
      <div className="w-[70%] flex flex-col gap-3 items-center">
        <div className="w-[100%] flex items-center justify-evenly">
          <button >All</button>
          <button >Complate</button>
          <button >Uncomplate</button>
        </div>
        <ul className="w-[80%] flex flex-col gap-2 items-center h-[250px] overflow-auto min-w-[290px]">
          {
            tasks.map(item => {
              console.log(item)
              return <Li title={item.title} id={item.id} complated={item.completed} key={item.id} />
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default App
