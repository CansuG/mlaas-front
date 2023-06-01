import React, { useState } from 'react';
import { findLabel } from '../../../api/service';
import RateService from '../../Ratings/rating';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const LabelFinder = () => {
  const [text, setText] = useState('');
  const [label, setLabel] = useState([]);
  const [response, setResponse] = useState('');

  console.log("text and question:"+text+" "+label)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const data = findLabel(text, label);
      console.log("d"+data)
      setResponse(data);
      console.log(response)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    
      <div className="section">
        <div className="section__margin">
        <div className="home-icon">
          <Link to="/" className="home-icon">
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </div>
        <h1 className="title gradient__text">Question Answering</h1>
        <form onSubmit={handleSubmit} className="form__container">
        <div className="modeldesc">
            <p className="desctext">You simply pass a sentence/paragraph and the possible labels for that sentence, and you get a result.</p>
              <div className="testinputs">
                <p className="desctext">
                  Example Text: A new model offers an explanation for how the Galilean satellites formed around the solar system’s largest world. Konstantin Batygin did not set out to solve one of the solar system’s most puzzling mysteries when he went for a run up a hill in Nice, France. Dr. Batygin, a Caltech researcher, best known for his contributions to the search for the solar system’s missing'Planet Nine,' spotted a beer bottle. At a steep, 20 degree grade, he wondered why it wasn’t rolling down the hill. He realized there was a breeze at his back holding the bottle in place. Then he had a thought that would only pop into the mind of a theoretical astrophysicist: “Oh! This is how Europa formed.' Europa is one of Jupiter’s four large Galilean moons. And in a paper published Monday in the Astrophysical Journal, Dr. Batygin and a co-author, Alessandro Morbidelli, a planetary scientist at the Côte d’Azur Observatory in France, present a theory explaining how some moons form around gas giants like Jupiter and Saturn, suggesting that millimeter-sized grains of hail produced during the solar system’s formation became trapped around these massive worlds, taking shape one at a time into the potentially habitable moons we know today.
                </p>
                <p className="helpertext">
                Example Labels: space & cosmos, scientific discovery, microbiology, robots, archeology
                </p>
              </div>
          </div>
        
        
        <label className="input__label">
          Text
          <textarea type="text" className="input_field_qa" value={text} onChange={e => setText(e.target.value)} />
        </label>
       
        <label className="input__label">
          Labels:
          <textarea className="input_field_qa" type="text" value={label} onChange={e => setLabel(e.target.value)} />
        </label>
        <br></br>
     
        <button className="calculate__button"  onClick={handleSubmit}>Compute</button>
        </form>
        {response && (
          <div className="output-container">
            <p className="output__text">Output: {response}</p>
          </div>
        )}
        
        <div><RateService name="Label Finder"/></div>
      </div>
    </div>
  );

};

export default LabelFinder;