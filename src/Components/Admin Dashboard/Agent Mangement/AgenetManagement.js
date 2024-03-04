import React from "react";
import "./AgentMangement.css";

const AgentManagement = () => {
  const iconPaths = Array.from(
    { length: 10 },
    (_, index) => `./icon${index + 1}.png`
  );

  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="imagesoficons">
          {iconPaths.map((iconPath, index) => (
            <img key={index} src={iconPath} alt={`icon-${index + 1}`} />
          ))}
        </div>
      </div>

      <div className="main-content">
        <div className="header">
          <button className="left-button">Agent Management</button>
          <div className="right-buttons">
            <button id="right-firstbutton"> Edit Agent Details</button>
            <button id="right-secondbutton">
              <img src="./fi_plus.png" alt="" />
              Add New Agent
            </button>
          </div>
        </div>

        <div className="container">
          {/* First container */}
          <div className="sub-container">
            <div className="the-contentof">
              <img src="./profileintest.png" alt="" />
              <div>
                <select className="custom-select">
                  <option value="thisWeek">This Week</option>
                  <option value="thisMonth">This Month</option>
                  <option value="thisYear">This Year</option>
                </select>
              </div>
            </div>
            <div className="thedatatoshow">
              <div className="stats-container">
                <div className="large-text">All Agents</div>
                <div className="small-text">
                  <div className="number">1,250</div>
                  <div className="percentage">+15.80%</div>
                </div>
              </div>
              <div className="stats-container">
                <div className="large-text">Active</div>
                <div className="small-text">
                  <div className="number">1,180</div>
                  <div className="percentage">+85%</div>
                </div>
              </div>
              <div className="stats-container">
                <div className="large-text">In-Active</div>
                <div className="small-text">
                  <div className="number">70</div>
                  <div className="percentageminus">-10%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Second container */}
          <div className="sub-container">
            <div className="the-contentof">
              <img src="./shoppingtest.png" alt="" />
              <div>
                <select className="custom-select">
                  <option value="thisWeek">This Week</option>
                  <option value="thisMonth">This Month</option>
                  <option value="thisYear">This Year</option>
                </select>
              </div>
            </div>
            <div className="thedatatoshow">
              <div className="stats-container">
                <div className="large-text">New Agents</div>
                <div className="small-text">
                  <div className="number">30</div>
                  <div className="percentageminus">-20%</div>
                </div>
              </div>
              <div className="stats-container">
                <div className="large-text">Cancelled Agents</div>
                <div className="small-text">
                  <div className="number">10</div>
                  {/* <div className="percentage">5%</div> */}
                </div>
              </div>
              <div className="stats-container">
                <div className="large-text">Suspended Agents</div>
                <div className="small-text">
                  <div className="number">5</div>
                  {/* <div className="percentageminus">-10%</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third container */}
        <div className="container3">
          <div className="headerof3container">
            <h3>Agent List</h3>
            <div className="theserachcontrols">
              <div className="thedisplayofcontent">
                <img src="./search.png" alt="" />
                <input type="search" placeholder="Search" />
              </div>
              <div className="thedisplayofcontent1">
                <img src="./filter.png" alt="" />
                <span>Filter</span>
              </div>
              <div className="thedisplayofcontent1">
                <img src="./Calendar.png" alt="" />
                <span>Filter</span>
              </div>
            </div>
          </div>
          <div className="thebelowdata">
            <div className="containerofing">
              <div className="thefirst">
                <div className="datatobe">
                  <input type="radio" />
                </div>
                <div className="datatobe">
                  <h4>Agents Name</h4>
                  <img src="./sort.png" alt="" />
                </div>
                <div className="datatobe">
                  <h4>Email</h4>
                  <img src="./sort.png" alt="" />
                </div>
                <div className="datatobe">
                  <h4>Phone</h4>
                  <img src="./sort.png" alt="" />
                </div>
                <div className="datatobe">
                  <h4>City</h4>
                  <img src="./sort.png" alt="" />
                </div>
                <div className="datatobe">
                  <h4>Member Since</h4>
                  <img src="./sort.png" alt="" />
                </div>
                <div className="datatobe">
                  <h4>Commision Earned</h4>
                  <img src="./sort.png" alt="" />
                </div>
                <div className="datatobe">
                  <h4>Status</h4>
                  <img src="./sort.png" alt="" />
                </div>
              </div>
              <div className="thefirst">
                <div className="datatobe">
                  <input type="radio" />
                </div>
                <div className="datatobe">
                  <h5>Ram Naidu</h5>
                </div>
                <div className="datatobe">
                  <h5>r@gmail.com</h5>
                </div>
                <div className="datatobe">
                  <h5>+91-888888888</h5>
                </div>
                <div className="datatobe">
                  <h5>Vizag</h5>
                </div>
                <div className="datatobe">
                  <h5>12 Jan 2024 - 12:25 am</h5>
                </div>
                <div className="datatobe">
                  <h5>9500000003,009.00</h5>
                </div>
                <div className="datatobe">
                  <h5>Active</h5>
                </div>
              </div>
              <div className="thefirst">
                <div className="datatobe">
                  <input type="radio" />
                </div>
                <div className="datatobe">
                  <h5>Ram Naidu</h5>
                </div>
                <div className="datatobe">
                  <h5>r@gmail.com</h5>
                </div>
                <div className="datatobe">
                  <h5>+91-888888888</h5>
                </div>
                <div className="datatobe">
                  <h5>Vizag</h5>
                </div>
                <div className="datatobe">
                  <h5>12 Jan 2024 - 12:25 am</h5>
                </div>
                <div className="datatobe">
                  <h5>9500000003,009.00</h5>
                </div>
                <div className="datatobe">
                  <h5>Active</h5>
                </div>
              </div>
              <div className="thefirst">
                <div className="datatobe">
                  <input type="radio" />
                </div>
                <div className="datatobe">
                  <h5>Ram Naidu</h5>
                </div>
                <div className="datatobe">
                  <h5>r@gmail.com</h5>
                </div>
                <div className="datatobe">
                  <h5>+91-888888888</h5>
                </div>
                <div className="datatobe">
                  <h5>Vizag</h5>
                </div>
                <div className="datatobe">
                  <h5>12 Jan 2024 - 12:25 am</h5>
                </div>
                <div className="datatobe">
                  <h5>9500000003,009.00</h5>
                </div>
                <div className="datatobe">
                  <h5>Active</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentManagement;
