
import { useDispatch } from 'react-redux';
import { detailsPokemon } from '../helper/pokListAction';

interface Props{
    name:string;
    url:string;
    setOpenPopUp:React.Dispatch<React.SetStateAction<boolean>>
}


const PokemonList = ({name,url,setOpenPopUp} :Props) => {
    const parts = url.split("/"); // Split the URL by "/"
    const id = parts[parts.length - 2]; 
   
    
    const dispatch=useDispatch();

    const showDetails=(name:string)=>{
     if(name){
     detailsPokemon(name,dispatch);
     setOpenPopUp(true)
    }
  }

  return (
    <div style={{width:"calc(33.33% - 10px)"}} onClick={()=>showDetails(name)}>
    <section className={`pokemon-list-container normal`}>
      <p data-testid="pokemon-id" className="pokemon-name"> # {id} </p>
      <p data-testid="pokemon-name" className="pokemon-name"> {name} </p>
    </section>
  </div>
  )
}

export default PokemonList