import React from "react";
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus} from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

export const Portofolio = () => {

  //netflix

  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img className="portofolio-image-popupbox" src={netflix} alt="Netflix Clone Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Codfsfsdfsfding/netflix-project")}>https://github.com/8020Cosfdsfdfsfdsfsding/netflix-project</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix clone project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // City Guide App
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img className="portofolio-image-popupbox" src={cityGuide} alt="City Guide App Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://city-guide-app-retretetetreproject.heretetretretrtetokuapp.com/", "_blank")}>https://city-guide-app-project.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020tertrertetrtetetCoding/city-guide-app", "_blank")}>https://github.com/8020Coding/city-guide-app</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "City Guide App project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img className="portofolio-image-popupbox" src={portfolio} alt="Portfolio Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://portfolertetrerterteio-rea-and-material-ui.herokuapp.com/", "_blank")}>https://portfolierteterto-rea-and-material-ui.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Ctrertetretetetoding/portfilio", "_blank")}>https://github.com/8020Certeterteoding/portfilio</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Portofolio React and Material UI project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Task Manager React and Redux Project
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img className="portofolio-image-popupbox" src={taskManager} alt="Task Manager React and Redux Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://react-redux-task-mansdfsfsdcsdcscdcager.herokuapp.com/", "_blank")}>https://react-redsdfsfsdcsdcscdcux-task-manager.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Codsdfsfsdcsdcscdcing/task-manager", "_blank")}>https://github.com/802sdfsfsdcsdcscdc0Coding/task-manager</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "Task Manager React and Redux project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }




  return (
    <div id="portofolio" className="portofolio-wrapper">
        <div className="container">
            <h1 className="text-uppercase text-center py-5">portofolio.</h1>   
            <div className="image-box-wrapper row justify-content-center">
                <div className="portofolio-image-box" onClick={openPopupboxNetflix}> 
                    <img className="portofolio-image" src={netflix} alt="Netflix Clone Project..." />
                    <div className="overflow"></div> 
                    <FontAwesomeIcon className="portofolio-icon" icon={faSearchPlus} />   
                </div>

                <div className="portofolio-image-box" onClick={openPopupboxCityGuide}> 
                    <img className="portofolio-image" src={cityGuide} alt="City Guide App Project..." />
                    <div className="overflow"></div>    
                    <FontAwesomeIcon className="portofolio-icon" icon={faSearchPlus} />
                </div> 

                <div className="portofolio-image-box" onClick={openPopupboxPortfolio}> 
                    <img className="portofolio-image" src={portfolio} alt="Portofolio Project..." /> 
                    <div className="overflow"></div>  
                    <FontAwesomeIcon className="portofolio-icon" icon={faSearchPlus} /> 
                </div> 

                <div className="portofolio-image-box" onClick={openPopupboxTaskManager}> 
                    <img className="portofolio-image" src={taskManager} alt="Task Manager React and Redux Project..." />    
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portofolio-icon" icon={faSearchPlus} />
                </div> 
            </div> 
        </div>
        <PopupboxContainer {...popupboxConfigNetflix} />
        <PopupboxContainer {...popupboxConfigCityGuide} />
        <PopupboxContainer {...popupboxConfigPortfolio} />
        <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
  )
}

export default Portofolio;
