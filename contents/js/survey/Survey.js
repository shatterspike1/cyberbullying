var Survey = React.createClass({ displayName: 'Survey',

    // survey may want to know about page
    /*
    getInitialState: function() {
        return {page: null}
    },
    */

    // note that this is a placeholder
    //  and we may want some different kind of button or behavior,
    //  and we may want to make the "next" button handle the click instead
    // <button onClick={this.handleClick}>{'foobar'}</button>
    /*
    handleClick: function(event) {
        console.log('<something> was clicked', this.props.page)
        this.props.onSomethingClicked(this.props.page.profile_owner_id)
    },
    */

    render: function(){
        return (
            <div className="survey">
                <div className="firstQuestion row">
                    <p>Is there any cyberaggressive behavior in the online posts? Mark yes if there is at least one negative word/comment and or content with intent to harm someone or others.</p>
                    <div className="p row">
                        <button>{'Yes'}</button>
                        <button>{'No'}</button>
                    </div>
                </div>
                <div className="secondQuestion row">
                    <p>Is there any cyerbullying in the online post? Mark yes if there are negative words and or comment with intent to harm someone or other, and the posts include two or more repeated negativity against a victim that cannot easily defend him or herself</p>
                    <div className="q row">
                        <button>{'Yes'}</button>
                        <button>{'No'}</button>
                    </div>
                </div>
            </div>
        )
    }

})
