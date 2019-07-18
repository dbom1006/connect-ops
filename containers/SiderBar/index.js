import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

export const SiderBar = () => {
	return (
		<Sider style={{
			overflow: 'auto',
			height: '100vh',
			position: 'fixed',
			left: 0,
		}}>
			<div className="logo" >
				<img src="/static/images/logo.png"></img>
			</div>
			<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
				<Menu.Item key="1">
					<Icon type="pie-chart" />
					<span>Option 1</span>
				</Menu.Item>
				<Menu.Item key="2">
					<Icon type="desktop" />
					<span>Option 2</span>
				</Menu.Item>
				<SubMenu
					key="sub1"
					title={
						<span>
							<Icon type="team" />
							<span>Team</span>
						</span>
					}
				>
					<Menu.Item key="6">Team 1</Menu.Item>
					<Menu.Item key="8">Team 2</Menu.Item>
				</SubMenu>
			</Menu>
		</Sider>
	)
}