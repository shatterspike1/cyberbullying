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
                        {"User: " + page.profile_owner_id}
                    </h2>
                    <h2 className="pageImage">
                        {"Image: "}
                        //style="width:640px;height:360px"
                        <img src=page.image_url>
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
