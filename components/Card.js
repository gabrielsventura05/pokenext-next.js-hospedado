import Image from "next/image"
import styles from '../styles/Card.module.css'

import Link from "next/link"

export default function Card({pokemon}) {

    return (

        <>
        <div className={styles.card}>


          {/* codigo para as imagens dos pokemons*/}
           {<Image 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            width={120}
            height={120}
            alt={pokemon.name}
           />}

            <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link legacyBehavior href={`/pokemons/${pokemon.id}`}>
        <a className={styles.btn}>Detalhes</a>
      </Link>
       {/*      <Image
            src="/images/pokemons/pikachu1.webp"
            width={120}
            height={120}
            alt="Pikachu" 
            />
             <h3 className={styles.title} >Pikachu</h3>  
             <Link legacyBehavior  href="/pokemons/pikachu">
             <a className={styles.btn}>Detalhes</a>
             </Link>
        </div>
         
        
         <div className={styles.card}>

            <Image
            src="/images/pokemons/pikachu2.webp"
            width={120}
            height={120}
            alt="Pikachu" 
            />
            
            <h3 className={styles.title} >Pikachu 2</h3>  
              <Link legacyBehavior  href="/pokemons/pikachu2">
             <a className={styles.btn}>Detalhes</a>
             </Link>
        </div>
        
        
        <div className={styles.card}>
            <Image
            src="/images/pokemons/bombasauro1.webp"
            width={120}
            height={120}
            alt="Pikachu" 
            />
            
            <h3 className={styles.title} >bombasauro1</h3>  
              <Link legacyBehavior  href="/pokemons/Bombasauro1">
             <a className={styles.btn}>Detalhes</a>
             </Link>

       </div>
       
       
        <div className={styles.card}>
            <Image
            src="/images/pokemons/bombasauro2.webp"
            width={120}
            height={120}
            alt="Pikachu" 
            />
            
            <h3 className={styles.title} >bombasauro2</h3>  
              <Link legacyBehavior  href="/pokemons/Bombasauro2">
             <a className={styles.btn}>Detalhes</a>
             </Link>

        </div>

        
        <div className={styles.card}>
            <Image
            src="/images/pokemons/bombasauro3.webp"
            width={120}
            height={120}
            alt="Pikachu" 
            />
            
            <h3 className={styles.title} >bombasauro3</h3>  
              <Link legacyBehavior  href="/pokemons/Bombasauro3">
             <a className={styles.btn}>Detalhes</a>
             </Link>

        </div>


        <div className={styles.card}>
            <Image
            src="/images/pokemons/charizard1.webp"
            width={120}
            height={120}
            alt="Pikachu" 
            />
            
            <h3 className={styles.title} >Charizard 1</h3>  
              <Link legacyBehavior  href="/pokemons/charizard1">
             <a className={styles.btn}>Detalhes</a>
             </Link>

         </div>


        <div className={styles.card}>
            <Image
            src="/images/pokemons/charizard2.webp"
            width={120}
            height={120}
            alt="Pikachu" 
            />
            
            <h3 className={styles.title}>Charizard 2</h3>  
              <Link legacyBehavior  href="/pokemons/charizard2">
             <a className={styles.btn}>Detalhes</a>
             </Link>

        </div>

        <div className={styles.card}>
            <Image
            src="/images/pokemons/charizard3.webp"
            width={120}
            height={120}
            alt="Pikachu" 
            />
            
            <h3 className={styles.title} >Sharizard 3</h3>  
              <Link legacyBehavior  href="/pokemons/charizard3">
             <a className={styles.btn}>Detalhes</a>
             </Link>
             */}

            </div>

            

            




        



        </>
    )
}