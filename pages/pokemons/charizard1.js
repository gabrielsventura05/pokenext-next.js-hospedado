import Image from "next/image"
import styles from '../../styles/Pokemons.module.css'


export default function Charizard1() {

    return (
    
    <>
        <div className={styles.pokemon_container}>
            <h1 className={styles.title}>Charizard 1</h1>

            <Image src="/images/pokemons/charizard1.webp" 
            width={200}
            height={200}
            alt="pikachu1"
            />
        
           <h3 className={styles.type}>Tipo:</h3>
        <div className={styles.types_container}>
            <p className={styles.type_fire}>Fire</p>
            
            
             
        </div>

        <div className={styles.data_container}>
            <div className={styles.data_height}>
                
            
        <h3>Altura: </h3>    
        <p>60 cm</p>
        </div> 

        <div className={styles.data_weight}>
            <h3>Peso:  </h3>
            <p>8,5 kg</p>
        </div>   
        </div>
    </div>
    </>
    
    )
    
}