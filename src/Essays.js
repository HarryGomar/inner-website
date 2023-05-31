import { useEffect, useState } from "react"


export default function Essays ()
{
    const [ essays, setEssay] = useState([])

    const [ content, setContent ] = useState()

    const displayEssay = (essay) =>
    {
      
      setContent(essay.title)
      console.log(content)
    }

    const getEssays = async () =>
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const result = await response.json()
        setEssay(result)
    }

    useEffect(() => 
    {
      getEssays()
    })

    


    return <div>
      
      <h3>My Modal</h3>
      

      <div className="body">
        <div className="side">
          <ul>
            {essays.map((essay) =>  <button onClick={() => {displayEssay(essay)}}> {essay.title} </button> ) }
          </ul>
        </div>
        <div className="element">
          <h3> {content} </h3>
        </div>

      </div>

    </div>

}