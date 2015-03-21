var Overview = React.createClass({ displayName: 'Overview',

    getInitialState: function() {
        return {data: []};
    },
    
    componentDidMount: function() {
        //add stuff here
    },
    
    render: function() {
        var self = this
        
        return (
            <div className= 'Overview'>
                <div className = 'InstructionView three columns'>
                <h2>Oh, hello!</h2>
                </div>
                <div className = 'PageView six columns'>
                <h2>Over here!</h2>
                </div>
                <div id = 'survey' className = 'SurveyView'>
                    <Survey ref ='survey'/>
                </div>
            </div>
        )
    }

})