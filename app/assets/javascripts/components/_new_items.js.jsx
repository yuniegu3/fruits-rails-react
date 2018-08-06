const NewFruit = (props) => {
  let formFields = {}
 
  return(
    <div>
     <input ref={input => formFields.name = input} placeholder='Enter the name of the item'/>
     <input ref={input => formFields.description = input} placeholder='Enter a description' />
     <button>Submit</button>
      </div>
    )
}