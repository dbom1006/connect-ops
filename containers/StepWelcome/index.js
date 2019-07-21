import React from 'react';
import Title from 'antd/lib/typography/Title';
import "./styles.scss";

import { Upload, Icon, Button, message } from 'antd';
import { csvFileToJSON } from '../../helper/tools';
import { uploadFile } from '../../api';

const { Dragger } = Upload;

const getBase64 = async (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});
}

class StepWelcome extends React.Component {
	state = {
		file: null,
		isLoading: false,
	}

	onChangeFile = ({ fileList }) => {
		this.setState({ file: fileList[0] });
	}

	uploadFile = async () => {
		const { file } = this.state;
		this.setState({ isLoading: true });
		const preview = await csvFileToJSON(file.originFileObj);
		const result = await uploadFile(file.originFileObj);
		this.setState({ isLoading: false });
		if(!result) return message.error("Upload CSV file failed.");
		this.props.nextStep(2, { file, preview });
	}

	render() {
		const { file, isLoading } = this.state;
		return (
			<div className="container">
				<Title>Welcome to ConnectOps v2, where you can easily mass-deploy Amazon Workspaces for your company.</Title>
				<div className="upload">
					<Dragger onChange={this.onChangeFile} fileList={[]} name="file" multiple={false} accept=".csv" beforeUpload={() => false}>
						<p className="ant-upload-drag-icon">
							<Icon type="cloud-upload" />
						</p>
						{
							file
								? <div>
									<h3 className="ant-upload-text">{file.name} ({(file.size / 8192).toFixed(2)} KB)</h3>
									<p className="ant-upload-hint">Click or drag file to this area to upload</p>
								</div>
								: <div>
									<p className="ant-upload-text">Click or drag file to this area to upload</p>
									<p className="ant-upload-hint"> Support for a single upload, accept CSV files. </p>
								</div>
						}

					</Dragger>
				</div>
				<Button type="primary" disabled={!file} loading={isLoading} onClick={this.uploadFile}>Upload CSV</Button>
			</div>
		);
	}
}

export default StepWelcome;