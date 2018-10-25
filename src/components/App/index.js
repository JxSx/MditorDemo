import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './index.less';

class App extends Component {
  render() {
    return (
      <div className="app">
        {/*<div className="app-header">*/}
          {/*<h2 className="app-welcome">Welcome to Dawn</h2>*/}
        {/*</div>*/}
        {/*<div className="app-intro">*/}
          {/*<img src={logo} className="app-logo" alt="logo" />*/}
          {/*<div>*/}
            {/*To get started, edit <code>src/components/App.js</code> and save to reload.*/}
          {/*</div>*/}
        {/*</div>*/}
        {/*<ul className="app-links">*/}
          {/*<li><a href="https://alibaba.github.io/dawn/">Homepage</a></li>*/}
          {/*<li><a href="https://alibaba.github.io/dawn/docs">Documents</a></li>*/}
          {/*<li><a href="https://github.com/alibaba/dawn">Git Repo</a></li>*/}
          {/*<li><a href="https://github.com/alibaba/dawn/issues">Issues</a></li>*/}
        {/*</ul>*/}

        <textarea id="md_editor"></textarea>
      </div>
    );
  }

  componentDidMount(){
    var ele_textarea = document.getElementById('md_editor');
    var mditor =  Mditor.fromTextarea(ele_textarea);
      //获取或设置编辑器的值
      mditor.on('ready',function(){
          mditor.toolbar.items.map(item => {
              console.log('key:',item.key, '  name:',item.name)
          })
      });
  }
}

export default App;
