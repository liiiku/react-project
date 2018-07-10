import React from 'react'
import logoImg from './job.png'
import './logo.css'

class Logo extends React.Component {
  render() {
    return (
      <div className="logo-container">
        <img src={logoImg} alt="图片未成功加载" />
      </div>
    )
  }
}

export default Logo