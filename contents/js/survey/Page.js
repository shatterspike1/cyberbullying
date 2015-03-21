var Page = React.createClass({ displayName: 'Page',
    
    getInitialState: function() {
        return {page: null}
    },
    
    // image tag width/height
    //style="width:640px;height:360px"
    
    render: function () {
        
        var page = this.state.page;
        if(page) {
            return (
                <div className="pageView" >
                    <h2 className="pageOwnerId">
                        {"User: " + page.profile_owner_id}
                    </h2>
                    <div className="pageImage">
                        <h2>{"Image: "}</h2>
                        <img src={page.image_url}>{page.image.url}</img>
                    </div>
                </div>
            )
        } else {
            return (
                <h2>No page data.</h2>
            )
        }
    }
})
