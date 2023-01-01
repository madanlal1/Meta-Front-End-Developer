function DessertsList(props) {
  
  return (
    <ul>
      {
        props.data.filter(fil => fil.calories <= 500).sort((a,b)=> a.calories - b.calories).map(element => 
          <li>{element.name} - {element.calories} cal</li>
        )
      }
    </ul>
  );
}

export default DessertsList;