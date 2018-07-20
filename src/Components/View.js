import React, { Component } from 'react';
import '../App.css';
import API from '../API';
import {
    Form,
    Input,
    DatePicker,
    Card,
} from 'antd';

const FormItem = Form.Item;

class View extends Component{
    
    componentDidMount(){
        this.setState({
            title: '',
            description: '',
            startDate: '',
            endDate: '',
            receiverId: '',
            wager: ''
        })
    }
    render(){
        return(
            <div>
        <h1 style={{fontSize: '3em', textAlign:'center'}}>View Your Bet</h1>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Card bordered={false} style={{ width: '100%', fontSize: '1.5em', textAlign: 'center'}}>
            <Form>
              <FormItem
                label="Title:"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 12 }}
              >
                  <Input name="title"/>
              </FormItem>
              <FormItem
                label="Against"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 12 }}
              >
                  <Input name="bet"/>
              </FormItem>
              <FormItem
                label="Bet"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 12 }}
              >
                  <Input name="description"/>
              </FormItem>
              <FormItem
                label="Wager"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 12 }}
              >
                  <Input name="wager"/>
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
            </Form>             
          </Card>
        </div>
      </div>
        )
    }
}

export default View;