import React, { useState, useEffect } from 'react';

const RandomPokemon = () => {
    const [pokemonImage, setPokemonImage] = useState('');
    const [loading, setLoading] = useState(true);

    const getRandomPokemon = () => {
        const randomId = Math.floor(Math.random() * 898) + 1;

        fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
            .then(response => response.json())
            .then(data => {
                const imageUrl = data.sprites.front_default;
                setPokemonImage(imageUrl);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the Pokémon data:", error);
                setLoading(false);
            });
    };

    useEffect(() => {
        getRandomPokemon();
    }, []);

    return (
        <div>
            {loading ? (
                <p>Loading random Pokémon...</p>
            ) : (
                <div>
                    <img src={pokemonImage} alt="Random Pokémon" />
                </div>
            )}
            <button
                onClick={getRandomPokemon}
                style={{
                    background: 'none',
                    color: 'white',
                    border: 'none',
                    fontSize: '16px',
                    cursor: 'pointer',
                    padding: '10px 20px',
                    textDecoration: 'none',
                }}
            >Click To Get Another Pokémon</button>
        </div>
    );
};

export default RandomPokemon;
