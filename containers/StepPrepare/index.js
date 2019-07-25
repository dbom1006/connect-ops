import React from 'react';
import Title from 'antd/lib/typography/Title';
import "./styles.scss";

import { Modal, Button, Table, Icon } from 'antd';
import { deploy } from '../../api';
const { confirm } = Modal;

class StepPrepare extends React.Component {
	state = {
		file: null,
		isLoading: false,
	}

	showConfirm = () => {
		const { file = {}, preview = [] } = this.props;
		confirm({
			title: 'Are you sure to deploy the CSV?',
			content: 'Note: once you hit deploy, the CSV will be uploaded and workspaces will start to deploy, 25 at a time. If there are any more than 25 workspaces in the CSV, this may take a while for AWS to deploy all workspace instances, as there is a limit of 25 deployments allowed at any one time',
			okText: "Deploy",
			style: {
				left: 100
			},
			onOk: async() =>{
				await deploy();
				this.props.nextStep(3, { file, preview })
			} 
		});
	}

	render() {
		const { file = {}, preview = [] } = this.props;
		const columns = Object.keys(preview[0] || {}).map(key => ({ title: key, dataIndex: key, key }));
		return (
			<div className="prepare-container">
				<Title>Preview to deploy {file.name} ({(file.size / 8192).toFixed(2)} KB) <Button type="primary" disabled={!file} onClick={this.showConfirm}>PROVISION <Icon type="play-circle"></Icon></Button></Title>
				<div className="preview-data">
					<Table dataSource={preview} columns={columns} rowKey="UserName"></Table>
				</div>
			</div>
		);
	}
}

export default StepPrepare;