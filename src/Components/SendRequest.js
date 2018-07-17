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
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  changeDate = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  }
  
  confirm = (value) => {
    console.log('onOk: ', value);
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
                  <Input />
              </FormItem>
              <FormItem
                label="Against"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 12 }}
              >
                  <Input />
              </FormItem>
              <FormItem
                label="Bet"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 12 }}
              >
                  <Input />
              </FormItem>
              <FormItem
                label="Wager"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 12 }}
              >
                  <Input />
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
                onOk={this.confirm}
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
              onOk={this.confirm}
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