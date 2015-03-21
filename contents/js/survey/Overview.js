var Overview = React.createClass({ displayName: 'Overview',

    getInitialState: function() {
        return {data: [], store: this.props.store, url: this.props.url, iter: this.props.iter};
    },
    
    componentDidMount: function() {
        //add stuff here
    },
    
    // placeholder function for handling some click event
    /*
    onSomethingClicked: function(profile_id) {
        var post = _.find(this.state.data, {profile_owner_id: profile_id})
        this.refs.page.setState({page: post})
        this.refs.survey.setState({page: post})
    },
    */
    
    render: function() {
        var self = this
        
        return (
            <div className= 'Overview'>
                <div className = 'InstructionView three columns'>
                    <h2>Instructions Stuff</h2>
                </div>
                <div id= 'page' className = 'PageView six columns'>
                    <Page ref = "page"/>
                    <h2>Page Stuff</h2>
                </div>
                <div id = 'survey' className = 'SurveyView'>
                    <Survey ref = "survey" Survey iter={this.state.iter}/>
                </div>
            </div>
        )
    }

})
