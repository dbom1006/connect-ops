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
		step: 3,
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
						<Tabs size="large" className="tab-steps" activeKey={step.toString()} onTabClick={(tab) => this.setState({ step: tab })}>
							<TabPane tab="Welcome" key="1">
								{step == 1 && <StepWelcome nextStep={this.nextStep} />}
							</TabPane>
							<TabPane tab="Prepare to deploy" key="2" disabled={step < 2}>
								{step == 2 && <StepPrepare {...data} nextStep={this.nextStep} />}
							</TabPane>
							<TabPane tab="Deploying - Status" key="3" disabled={step < 3}>
								{step == 3 && <StepDeploying />}
							</TabPane>
						</Tabs>
					</Content>
				</div>
			</Layout>
		);
	}
}

export default Index;