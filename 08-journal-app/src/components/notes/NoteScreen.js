import React from 'react';
import NotesAppBar from './NotesAppBar';

const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                {/* <form>
                    
                </form> */}
                <input
                    type="text"
                    placeholder="Un título genial!"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="¿De qué trata?"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img
                        alt="Imagen de la nota"
                        src="https://besthqwallpapers.com/Uploads/21-3-2018/45159/thumb2-dragon-ball-super-vegetto-4k-characters-anime-characters.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default NoteScreen;
