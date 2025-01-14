import React from 'react';


const Welcome = ({ username, onInputChangeName, onClickNext }) => {
    return (
      <section className="welcome section">
        <div className="section-child">
          <h1 className="title">Welcome to Broadway Independent Cinema!</h1>
          <div className="input-area">
            <form>
              <label className="name">Don't be stranger, let us know your name: </label>
                <input
                  id="name"
                  type="text" 
                  value={username}
                  onChange={onInputChangeName}
                />
            </form>
          </div>
          <button className="welcome-btn" onClick={onClickNext}>
            {' '}
            Let's Go {' '}
          </button>
        </div>
      </section>
    );
};

export default Welcome;
