
import {Chart as ChartJS} from 'chart.js/auto'
import {Bar, Doughnut, Line} from 'react-chartjs-2'
import './App.css'
import sourceData from './data/sourceData.json'

function App() {


  return (
    <>
      <div className="App">
        <div className='dataCard revienuCard'>Chart 1</div>
        <div className="all">
        <div className='dataCard customeCard'><Bar 
        data ={{labels: ['A', 'B', 'C'],
                datasets: [
                 { labels: "Revenue",
                  data: [200, 300, 400],
                 },
                 {
                  label: "loss",
                  data: [90, 80, 70],
                 },
                 
                ]
        }}/></div>
        <div className='dataCard catagoryCard' >Chart 3</div></div>
      </div>
      {/* for more look the video of :https://youtu.be/6q5d3Z1-5kQ?si=bY194lZlCLCShx9V */}
    </>
  )
}

export default App
