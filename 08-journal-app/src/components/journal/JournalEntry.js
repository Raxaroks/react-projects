import React from 'react';


const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            
            <div 
                className="journal__entry-picture"
                style={ {
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://as.com/meristation/imagenes/2020/11/20/noticias/1605885180_631556_1605886400_noticia_normal.jpg)'
                } }
            >
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Dragon Ball Super Manga
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Lunes</span>
                <h4>28</h4>
            </div>

        </div>
    );
}

export default JournalEntry;
