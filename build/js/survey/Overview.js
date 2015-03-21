var Overview = react.createClass({ displayName: 'Overview',

    getInitialState: function() {
        return {data: []};
    },
    
    componentDidMount: function() {
        //add stuff here
    }
    
    render: function() {
        var self = this
        
        return (
            <div className= 'Overview'>
                <div className = 'InstructionView three columns'>
                </div>
                <div className = 'PageView six columns'>
                </div>
                <div className = 'SurveyView row'>
                </div>
            </div>
        )
    }

})