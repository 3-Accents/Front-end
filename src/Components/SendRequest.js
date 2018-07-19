import React, { Component } from 'react';
import '../App.css';

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
    receiverId: '',
    wager: ''
  }
  

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  inputChange = (event) =>{
    console.log( event.target.value)//text 
    this.setState({
      [event.target.name] : event.target.value
    })

  }

  changeDate = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  
  confirmStartDate = (value) => {
    console.log('Start: ', value);
    this.setState({
      startDate : value
    })
  }
  confirmEndDate = (value) => {
    console.log('End: ', value);
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
                  <Input name="title" onChange={this.inputChange}/>
              </FormItem>
              <FormItem
                label="Against"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 12 }}
              >
                  <Input name="bet" onChange={this.inputChange}/>
              </FormItem>
              <FormItem
                label="Bet"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 12 }}
              >
                  <Input name="description" onChange={this.inputChange}/>
              </FormItem>
              <FormItem
                label="Wager"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 12 }}
              >
                  <Input name="wager" onChange={this.inputChange}/>
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
                onChange={this.changeDate}
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
              onChange={this.changeDate}
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
export default SendRequestForm;