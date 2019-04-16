import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Societies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      societies: null,
    };
  }

  async componentDidMount() {
    const societies = (await axios.get('http://localhost:3000/societies')).data;
    this.setState({
        societies,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.societies === null && <p>Loading societies...</p>}
          {
            this.state.societies && this.state.societies.map(society => (
              <div key={society.uuid} className="col-sm-12 col-md-4 col-lg-3">
                <Link to={`/socities/${society.nameSlug}`} className="nounderline">
                  <div className="card text-white bg-secondary mb-3">
                    <div className="card-header">{society.name}</div>
                    <div className="card-body">
                      <img className="card-img-left cardSizing mx-auto d-block" src={society.logo} alt=""/>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Societies;