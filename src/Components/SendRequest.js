import React, { Component } from 'react';
import '../App.css';

import { Form,
         Select,
         Input,
         Button,
         DatePicker,
} from 'antd';

const { RangePicker } = DatePicker;


const FormItem = Form.Item;
const Option = Select.Option;

class SendRequest extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleSelectChange = (value) => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
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
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="Name Your Bet"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
            <Input />
        </FormItem>
        <FormItem
          label="Who"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
            <Input />
        </FormItem>
        <FormItem
          label="Description"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
            <Input />
        </FormItem>
        <FormItem
          label="Wager"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 12 }}
        >
            <Input />
        </FormItem>
        <FormItem
          wrapperCol={{ span: 12, offset: 5 }}
        >
        </FormItem>
        <FormItem>
        <DatePicker
        showTime
        format="YYYY-MM-DD HH:mm:ss"
        placeholder="Select Time"
        onChange={this.changeDate}
        onOk={this.confirm}
        /> 
        </FormItem>
        <FormItem>
        <RangePicker
        showTime={{ format: 'HH:mm' }}
        format="YYYY-MM-DD HH:mm"
        placeholder={['Start Time', 'End Time']}
        onChange={this.changeDate}
        onOk={this.confirm}
        />
         </FormItem>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
      </Form>
    );
  }
}
const SendRequestForm = Form.create()(SendRequest);
export default SendRequestForm;