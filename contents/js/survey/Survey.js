var Survey = React.createClass({ displayName: 'Survey',

    render: function(){
        return (
            <div className="survey">
                <div className="firstQuestion row">
                    <h6>Is there any cyberaggressive behavior in the online posts? Mark yes if there is at least one negative word/comment and or content with intent to harm someone or others.</h6>
                    <div className="p row">
                        <button>{'Yes'}</button>
                        <button>{'No'}</button>
                    </div>
                </div>
                <div className="secondQuestion row">
                    <h6>Is there any cyerbullying in the online post? Mark yes if there are negative words and or comment with intent to harm someone or other, and the posts include two or more repeated negativity against a victim that cannot easily defend him or herself</h6>
                    <div className="q row">
                        <button>{'Yes'}</button>
                        <button>{'No'}</button>
                    </div>
                </div>
            </div>
        )
    }

})