import React, { Component } from 'react';
import { ReactiveBase, CategorySearch,  ResultList} from '@appbaseio/reactivesearch';
import './App.css';

class App extends Component {
  render() {
    return (
      <ReactiveBase
				app="nifi-test"
				url="http://brendan.data.4ndata.com:7443/elasticsearch" themePreset="light">

				<div>
					<p> Hello Bren, Welcome to ReactiveSearch powered by <a href="http://p7uhel.staging.4ndata.com:7443/index/">NiFi!</a> </p>
				</div>

        <CategorySearch
        	componentId="searchbox"
        	dataField="filename.keyword"
        	categoryField="filename.keyword"
        	placeholder="Search for file names"
        />

        <ResultList
					componentId="result"
					title="Results"
					dataField="filename.keyword"
					from={0}
					size={5}
					pagination={true}
					react={{
						and: ["searchbox"]
					}}
					onData={(res) => {
						return {
							title: res.filename,
              description: res._id,
              poweredBy: res.filename
						}
					}}
				/>

			</ReactiveBase>
    );
  }
}
export default App;
