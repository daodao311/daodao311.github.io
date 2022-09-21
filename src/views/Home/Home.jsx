import React, { Component } from 'react'
import moment from 'moment';
import { Space, Button, TimePicker } from 'antd'
import { UnorderedListOutlined } from '@ant-design/icons';
import '@/assets/scss/view-style/home.scss'
import onwork from '@/assets/images/onwork.svg'
import offwork from '@/assets/images/offwork.svg'

// const onClick = (value) => console.log(value);
const format = 'HH : mm : ss'

class Timer extends Component {
  state = {
    startTime: '08 : 30 : 00', // 上班时间
    finishTime: '17 : 30 : 00', // 下班时间
    restTime: '00 : 00 : 00', // 剩余时间
  }
  componentDidMount() {
    let finish = moment(this.state.finishTime, format),
      current = moment()
    current > finish ? this.setNotification('已下班！') : this.setNotification('已上班！')
    this.computeRestTime() // 计算剩余时间
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  // 通知
  setNotification = (text) => {
    const sendNotification = () => {
      new Notification("重要通知：", {
        body: text,
        icon: require('@/assets/images/web-title.jpg')
      })
    }
    if (window.Notification.permission === "granted") { // 判断是否有权限
      sendNotification();
    } else if (window.Notification.permission !== "denied") {
      window.Notification.requestPermission((permission) => { // 没有权限发起请求
        sendNotification();
      });
    }
  }
  getTimeDiff = (start, end) => {
    let second = Math.abs(start.diff(end, 'seconds') % 60).toString().padStart(2, '0'),
      minute = Math.abs(start.diff(end, 'minutes') % 60).toString().padStart(2, '0'),
      hour = Math.abs(start.diff(end, 'hours') % 24).toString().padStart(2, '0')
    return hour + ' : ' + minute + ' : ' + second
  }
  handleTime = () => {
    let start = moment(this.state.startTime, format),
      finish = moment(this.state.finishTime, format),
      current = moment()
    if (current > finish) {
      // 已下班
      this.setState({
        restTime: this.getTimeDiff(start, current)
      })
      if (this.isWork) {
        console.log('1111');
        this.setNotification('已下班！') // 通知
        this.isWork = false
      }
    } else {
      this.setState({
        restTime: this.getTimeDiff(finish, current)
      })
      if (!this.isWork) {
        this.setNotification('已上班！') // 通知
        this.isWork = true
      }
    }
  }
  // 计算剩余时间
  computeRestTime = () => {
    this.isWork = moment(this.state.finishTime, format) > moment() // 初始化上班状态
    this.handleTime()
    this.timerID = setInterval(this.handleTime, 500)
    console.log('this.timerID', this.timerID);
  }
  // 保存
  handleSave = (val) => {
    clearInterval(this.timerID)
    this.computeRestTime()
  }
  // 取消
  handleCancel = () => {
    console.log('取消',);
  }
  onStartChange = (time, timeString) => {
    this.setState({
      startTime: timeString
    })
  }
  onFinishChange = (time, timeString) => {
    this.setState({
      finishTime: timeString
    })
  }
  onClickMenu = () => {
    this.menuShow = !this.menuShow
  }
  render() {
    return (
      <Space direction="vertical" className='home-wrapper'>
        <div className="time">
          {this.isWork ?
            <img className='image' src={onwork} alt='' /> :
            <img className='image' src={offwork} alt='' />
          }
          <span className='text'>
            {this.state.restTime}
          </span>
        </div>
        {this.menuShow && <div className="editor">
          <TimePicker defaultValue={moment(this.state.startTime, format)} format={format} size="large" allowClear style={{ width: '100%' }} onChange={this.onStartChange} />
          <TimePicker defaultValue={moment(this.state.finishTime, format)} format={format} size="large" allowClear style={{ width: '100%' }} onChange={this.onFinishChange} />
          <Space className='buttons'>
            <Button size="large" onClick={this.handleCancel}>取消</Button>
            <Button size="large" type="primary" onClick={this.handleSave}>保存</Button>
          </Space>
        </div>}
        <UnorderedListOutlined className='icon-menu' onClick={this.onClickMenu} />
      </Space>
    )
  }
}

const HomeView = () => <Timer />
export default HomeView
