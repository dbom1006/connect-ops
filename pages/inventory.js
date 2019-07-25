import React from 'react';
import { Layout, Tabs } from 'antd';
import { SiderBar } from "../containers/SiderBar";
import StepWelcome from '../containers/StepWelcome';
import StepPrepare from '../containers/StepPrepare';
import StepDeploying from '../containers/StepDeploying';

const { TabPane } = Tabs;
const { Content } = Layout;

class Index extends React.Component {
	state = {
		step: 1,
		data: {}
	}

	nextStep = (step, data) => {
		this.setState({ step, data });
	}

	render() {
		const { step, data } = this.state;
		return (
			<Layout>
				<SiderBar />
				<div style={{ marginLeft: 200, width: 'calc(100% - 200px)' }}>
					<Content style={{ margin: '16px' }}>
						<h1>This is an Inventory</h1>
					</Content>
				</div>
			</Layout>
		);
	}
}

export default Index;