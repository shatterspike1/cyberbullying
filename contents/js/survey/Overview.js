var Overview = React.createClass({ displayName: 'Overview',

    getInitialState: function() {
        console.log('getInitialState...')
        var it
            if (!this.props.iter){
                it = 0
                console.log('\t...no props')
            }
            else{
                it = this.props.iter
                console.log('\n...props')
            }
        return {data: [], store: this.props.store, url: this.props.url, iter: it};
    },
    
    componentDidMount: function() {
        console.log('\t...componentDidMount')
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                //console.log("data[0]: ", data[0])
                this.setState({
                    data: data
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
        /*
        var hold
        Papa.parse(this.props.url, {
            download: true,
            header: true,
            complete: function(results){
                hold = results
                console.log(results)
            }
        })
        
        this.setState({
            data: hold
        })
        */
    },
    
    nextPage: function(e) {
        var hold = this.state.iter + 1
        this.setState({iter: hold})
        var postIdx = hold
        var nextPg = this.state.data[postIdx]
        console.log("Next Page: ", nextPg)
        this.refs.pageView.setState({page: nextPg})
        this.refs.survey.setState({page: nextPg})
    },
    
    initPage: function() {
        var postIdx = this.state.iter
        var pg = this.state.data[postIdx]
        console.log("page: ", pg)
        this.refs.pageView.setState({page: pg})
        this.refs.survey.setState({page: pg, isStart: false, iter:0})
    },
    
    render: function() {
        var self = this
        
        console.log("Iter: ", this.state.iter)
        
        return (
            <div className= "Overview">
                <div className = "InstructionView five columns card card-secondary">
                    <Instructions />
                </div>

                <div id = "page" className = "PageView seven columns card card-dark">
                    <h3>{"Instagram Post:"}</h3>
                    <Page ref = "pageView" Page page={this.state.data[this.state.iter]} />
                </div>
                
                <div id = "survey" className = "SurveyView five columns card">
                    <Survey ref = "survey" Survey iter={this.state.iter} Survey page={this.state.data[this.state.iter]} Survey handleNextPage={this.nextPage} />
                </div>
            </div>
        )
    }

})
