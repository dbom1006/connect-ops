import React from 'react';
import Title from 'antd/lib/typography/Title';
import "./styles.scss";

import { Modal, Button, Table, Icon, Tag } from 'antd';

class StepDeploying extends React.Component {
	state = {
		data: [],
		loading: false,
	}

	componentDidMount = () => {
		this.fetchData();
	}

	fetchData = async () => {
		this.setState({ loading: true });
		await new Promise((res) => setTimeout(() => res(), 500));
		const res = await fetch('/static/dummy/fake-data.json').then(x => x.json());
		this.setState({ loading: false, data: res.Workspaces });
	}

	columns = [
		{
			title: 'DirectoryId',
			dataIndex: 'DirectoryId',
		}, {
			title: 'WorkspaceId',
			dataIndex: 'WorkspaceId',
		}, {
			title: 'UserName',
			dataIndex: 'UserName',
			render: (value) => <b>{value}</b>
		}, {
			title: 'State',
			dataIndex: 'State',
			render: (value) => <Tag color={value == "AVAILABLE" ? "green" : "gold"}>{value}</Tag>
		}, {
			title: 'SubnetId',
			dataIndex: 'SubnetId',
		}, {
			title: 'IpAddress',
			dataIndex: 'IpAddress',
		}, {
			title: 'BundleId',
			dataIndex: 'BundleId',
		}
	]

	render() {
		const { data, loading, panigation } = this.state;
		return (
			<div className="prepare-container">
				<Title>The CSV has been deployed <Button type="link" size="large" onClick={this.fetchData}><Icon type="sync" spin={loading} /></Button></Title>
				<div className="preview-data">
					<Table dataSource={data} columns={this.columns} loading={loading} rowKey="UserName"></Table>
				</div>
			</div>
		);
	}
}

export default StepDeploying;