import React, { Component } from 'react';

class ReturnToTopButton extends Component {
  static backToTop() {
    window.scrollTo(0, 0);
  }

  constructor(props) {
    super(props);
    this.trackScrolling = this.trackScrolling.bind(this);

    this.state = {
      visible: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.trackScrolling);
  }

  trackScrolling() {
    this.setState({
      visible: window.scrollY > 500,
    });
  }


  render() {
    const { visible } = this.state;
    let className = 'return-to-top';
    if (visible) {
      className += ' visible';
    }
    return (
      <div className={className} onClick={ReturnToTopButton.backToTop}>
        <span className="icon is-large">
          <img src="/static/up-arrow.png" alt="" />
        </span>
      </div>
    );
  }
}

export default ReturnToTopButton;
