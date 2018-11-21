import React, { Component } from 'react';
import './App.css';
import {Carousel, Noticia, QBoxSider, NoticiaCarousel, QBoxButton, Header, HeaderItem, Cartao, QBoxDrawer} from "./components";
import { Layout } from 'antd';

const {Content} = Layout;
const imgteste ='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png';
class App extends Component {

  showDrawer = () => {
      this.setState({
          visible: true,
      });
  };
  render() {
    return (
        <Layout>
          <Header color='#653998'>
            <QBoxDrawer />
            <HeaderItem image icon='menu' text='menu' left />
            <HeaderItem button icon='user'/>
            {/* <HeaderItem class='tes1' image icon='logoteste' width='200px' text='logo' left /> */}
            
            <HeaderItem class='header' button text='Notificações' icon='bell'/>
            <HeaderItem class='header' button text='Turmas' icon='team'/>
          </Header>
          <Content style={{backgroundColor:'#FFFFFF'}}>
            <Carousel>
              <NoticiaCarousel class='tes1' title='Novidades' img={imgteste} subtitle='LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj'/>
              <NoticiaCarousel title='Novidades' subtitle='LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj'/>
            </Carousel>
          </Content>
        </Layout>
    );
  }
}

export default App;