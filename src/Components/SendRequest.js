import React, { Component } from 'react';
import '../App.css';
import API from '../API';
import {
  withRouter
} from 'react-router-dom';

import { Form,
         Input,
         Button,
         DatePicker,
         Card,
} from 'antd';

const FormItem = Form.Item;

class SendRequest extends Component {

  state = {
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    receiverId: 1,
    wager: ''
  }
  

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err) => {
      if (!err) {
        this.state.receiverId = Number(this.state.receiverId)
        API
          .sendRequest(this.state)
          .then(() => {
            this.props.history.push('/overview');
          })
      }
    });
  }

  inputChange = (event) =>{
    this.setState({
      [event.target.name] : event.target.value
    })

  }
  
  confirmStartDate = (value) => {
    this.setState({
      startDate : value
    })
  }
  confirmEndDate = (value) => {
    this.setState({
      endDate : value
    })
  }

  render() {
    return (
      <div>
        <h1 style={{fontSize: '3em', textAlign:'center'}}>Make a Bet!</h1>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Card bordered={false} style={{ width: '100%', fontSize: '1.5em', textAlign: 'center'}}>
            <Form onSubmit={this.handleSubmit}>
              <FormItem
                label="Title:"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 12 }}
              >
                  <Input name="title" onChange={this.inputChange} required/>
              </FormItem>
              <FormItem
                label="Against"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 12 }}
              >
              {/*  todo - add dropdown with friends  */}
                  <Input name="receiverId" />
              </FormItem>
              <FormItem
                label="Bet"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 12 }}
              >
                  <Input name="description" onChange={this.inputChange} required/>
              </FormItem>
              <FormItem
                label="Wager"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 12 }}
              >
                  <Input name="wager" onChange={this.inputChange} required/>
              </FormItem>
              <FormItem
                label="Start Date"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 12 }}
              >
                <DatePicker
                showTime
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="Start Time"
                onOk={this.confirmStartDate}
                /> 
              </FormItem>
              <FormItem
                label="End Date"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 12 }}
              >
              <DatePicker
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="End Time"
              onOk={this.confirmEndDate}
              /> 
              </FormItem>
                <Button type="primary" htmlType="submit">
                  Send Request 
                </Button>
            </Form>             
          </Card>
        </div>
      </div>
    );
  }
}
const SendRequestForm = Form.create()(SendRequest);
export default withRouter(SendRequestForm);