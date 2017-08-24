import React, { PureComponent } from 'react'
import Header from 'components/molecules/Header'
import Button from 'components/atoms/Button'
import Input from 'components/molecules/Input'

import './Person.css'

class Person extends PureComponent {
  state = {
    isDisabled: true,
    name: this.props.data.name,
    gender: this.props.data.gender,
    birth_year: this.props.data.birth_year,
    height: this.props.data.height
  }

  render() {
    const btnTxt = this.state.isDisabled
      ? 'Click Here To Enable Editing'
      : 'Click Here To Disable Editing'
    return (
      <section>
        <Header title="Personal Informations" />
        <div className="person-container">
          <div className="person-content">
            <Button className="link" onClick={this.enableFilds}>
              {btnTxt}
            </Button>
            <Input
              disabled={this.state.isDisabled}
              handleChange={this.handleChange}
              type="text"
              name="name"
              value={this.state.name}
              elementId={ this.props.data.name }
              title="Name"
            />
            <Input
              disabled={this.state.isDisabled}
              handleChange={this.handleChange}
              type="text"
              name="gender"
              value={this.state.gender}
              elementId={ this.props.data.gender }
              title="Gender"
            />
            <Input
              disabled={this.state.isDisabled}
              handleChange={this.handleChange}
              type="text"
              name="birth_year"
              value={this.state.birth_year}
              elementId={ this.props.data.birth_year }
              title="Birth Year"
            />
            <Input
              disabled={this.state.isDisabled}
              handleChange={this.handleChange}
              type="text"
              name="height"
              value={this.state.height}
              elementId={ this.props.data.height }
              title="Height"
            />
          </div>
        </div>
      </section>
    )
  }

  enableFilds = () => {
    this.setState({
      isDisabled: !this.state.isDisabled
    });
  }

  handleChange = (ev) => {
    const name = ev.target.name;
    this.setState({
      [name]: ev.target.value
    });
  }
}

export default Person