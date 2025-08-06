import Image from "next/image"
import styles from '../../styles/Pokemons.module.css'


export default function Bombasauro2() {

    return (
    
    <>
        <div className={styles.pokemon_container}>
            <h1 className={styles.title}>Bombasauro 2</h1>

            <Image src="/images/pokemons/bombasauro2.webp" 
            width={200}
            height={200}
            alt="pikachu1"
            />
        
           <h3 className={styles.type}>Tipo:</h3>
        <div className={styles.types_container}>
            <p className={styles.type_grass}>Grass</p>
            <p className={styles.type_poison}>Poison</p>
            
             
        </div>

        <div className={styles.data_container}>
            <div className={styles.data_height}>
                
            
        <h3>Altura: </h3>    
        <p>1.0 m</p>
        </div> 

        <div className={styles.data_weight}>
            <h3>Peso:  </h3>
            <p>13 kg</p>
        </div>   
        </div>
    </div>
    </>
    
    )
    
}