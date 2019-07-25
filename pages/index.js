import React from 'react';
import { Layout, Tabs, Icon } from 'antd';
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
					<Content style={{ margin: '16px auto', width: "80%" }}>
						<Tabs size="large" className="tab-steps" activeKey={step.toString()} onTabClick={(tab) => this.setState({ step: tab })}>
							<TabPane tab={
								<span className="step-1">
									Ingest
									<Icon type="cloud-upload" />
								</span>
							} className="step-1" key="1">
								{step == 1 && <StepWelcome nextStep={this.nextStep} />}
							</TabPane>
							<TabPane tab={
								<span className="step-3">
									Provision
									<Icon type="play-circle" />
								</span>
							} className="step-2" key="2" disabled={!data.preview}>
								{step == 2 && <StepPrepare {...data} nextStep={this.nextStep} />}
							</TabPane>
							<TabPane className="step-3" tab={
								<span className="step-3">
									Track
								<Icon type="eye" />
								</span>
							} key="3" disabled={!data.preview}>
								{step == 3 && <StepDeploying  {...data} />}
							</TabPane>
						</Tabs>
					</Content>
				</div>
			</Layout>
		);
	}
}

export default Index;