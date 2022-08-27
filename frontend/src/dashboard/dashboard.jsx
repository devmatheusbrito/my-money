import React, { Component } from 'react'
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/template/layout/row'
class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title='Dashboard' small='Versão legacy'/>
        <Content>
          <Row>
            <ValueBox 
            cols='12 4' 
            color='green' 
            icon='bank' 
            value='R$ 10'
            text='Total de Credit'/>
            <ValueBox 
            cols='12 4' 
            color='red' 
            icon='credit-card' 
            value='R$ 10'
            text='Total de Debit'/>
            <ValueBox 
            cols='12 4' 
            color='blue' 
            icon='money' 
            value='R$ 10'
            text='Valor Consolidado'/>
          </Row>
        </Content>
      </div>
    )
  }
}

export default Dashboard