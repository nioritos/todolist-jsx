import { BiCheck } from "react-icons/bi";
import { BiTrashAlt } from "react-icons/bi";

const Thing = ({text, listOfThings, setListOfThings , thing}) => {

function deleteThing() {
    setListOfThings(listOfThings.filter(element => element.id !== thing.id))
}

function completededThing() {
    setListOfThings(Object.keys(listOfThings).map((item, index) => {
        if(listOfThings[item].id === thing.id) {
           listOfThings[item].complete = !listOfThings[item].complete
        }

        return listOfThings[item]
    }))

}

    return(
        <div className="thing-card">
        <h3 className={`${thing.complete ? 'completed' : ''}`}>{text}</h3>
        <div className="functions-thing">
          <button onClick={completededThing}>
          <BiCheck size={26}/>
          </button>
          <button onClick={() => deleteThing()}>
          <BiTrashAlt size={26}/>
          </button>
          </div>
      </div>
    )
};

export default Thing;