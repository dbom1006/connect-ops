import { Layout, Menu, Icon } from 'antd';
import Router from 'next/router';
const { SubMenu } = Menu;
const { Sider } = Layout;

export const SiderBar = () => {
	return (
		<Sider style={{
			overflow: 'auto',
			height: '100vh',
			position: 'fixed',
			background: 'rgba(28,89,102)',
			left: 0,
		}}>
			<div className="logo" >
				<img src="/static/images/logo-new.png"></img>
				{/* <img src="/static/images/logo1.png"></img> */}
				<h1>PROVISION</h1>
			</div>
			<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
				<Menu.Item key="1" onClick={() => Router.push('/')} >
					<span>Create</span>
				</Menu.Item>
				<Menu.Item key="2" onClick={() => Router.push('/inventory')}>
					<span>Inventory</span>
				</Menu.Item>
			</Menu>
			<div className="logo-footer">
				<img src="/static/images/logo-footer.png"></img>
			</div>
		</Sider>
	)
}