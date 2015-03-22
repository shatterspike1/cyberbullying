var Overview = React.createClass({ displayName: 'Overview',

    getInitialState: function() {
        return {data: [], store: this.props.store, url: this.props.url, iter: this.props.iter};
    },
    
    componentDidMount: function() {
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
    },
    
    nextPage: function() {
        this.setState({iter: this.props.iter + 1})
        var postIdx = this.state.iter
        var nextPg = this.state.data[postIdx]
        console.log("page: ", nextPage)
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
        
        return (
            <div className= "Overview">
                <div className = "InstructionView three columns">
                    <h2>Instructions Stuff</h2>
                </div>
                <div id = "page" className = "PageView six columns">
                    <Page ref = "pageView"/>
                    <h2>Page Stuff</h2>
                </div>
                <div id = 'survey' className = 'SurveyView'>
                    <Survey ref = "survey" Survey iter={this.state.iter}/>
                </div>
            </div>
        )
    }

})
