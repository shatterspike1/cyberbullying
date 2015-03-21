var Page = React.createClass({ displayName: 'Page',
    
    getInitialState: function() {
        return {page: null}
    },
    
    render: function () {
        
        var page = this.state.page;
        if(page) {
            return (
                <div className="pageView" >
                    <h2 className="pageOwnerId">
                        {page.profile_owner_id}
                    </h2>
                    <h2 className="pageOwnerId">
                        {page.profile_owner_id}
                    </h2>
                </div>
            )
        } else {
            return (
                <h2>No page data.</h2>
            )
        }
    }
})
