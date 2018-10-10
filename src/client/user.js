import React, { Component } from "react";
import { Button } from 'reactstrap';

class User extends Component {
    render() {
      return (
        <div id="fh5co-board" data-columns="4">
          <div className="column size-1of4">
            <div className="item">
              <div className="animate-box bounceIn animated">
                <a href="images/img_1.jpg" className="image-popup fh5co-board-img" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?">
                  <img/>
                </a>
                <div class="fh5co-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?</div>
              </div>
            </div>
            <div className="item">
              <div className="animate-box bounceIn animated">
                <a href="images/img_1.jpg" className="image-popup fh5co-board-img" title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?">
                  <img/>
                </a>
                <div class="fh5co-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eos?</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default User;