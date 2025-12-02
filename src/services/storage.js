const Storage = {
    setDifficulty: (difficulty) => {
        localStorage.setItem('difficulty', JSON.stringify(difficulty));
    },

    getDifficulty: () => {
        const difficulty = localStorage.getItem('difficulty');
        return difficulty ? JSON.parse(difficulty) : null;
    },


    
};

export default Storage;